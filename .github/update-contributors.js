const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");
const axios = require("axios");

const config = {
    headers: {
        authorization: process.env.ROBOT_TOKEN 
            ? `token ${process.env.ROBOT_TOKEN}`
            : ``
    }
};

const run = async () => {
    const modulesFile = readFileSync(resolve(process.cwd(), ".gitmodules"), "utf-8");
    const repos = modulesFile
        .split("\n")
        .map(ln => ln.trim())
        .filter(ln => ln.startsWith("url = "))
        .map(ln => ln.replace("url = ", ""))
        .filter(ln => ln.startsWith("http"))
        .map(ln => ln.split("github.com/")[1].replace(".git", ""))

    const users = new Set();

    for await (const repo of repos) {
        const { data } = await axios.get(
            `https://api.github.com/repos/${repo}/contributors?per_page=100`,
            config
        )

        data.forEach(u => users.add(u.login));
    }

    const contributors = [];

    for await (const user of Array.from(users)) {
        const d = { username: user, email: "", name: user };

        const { data: { name, email, id } } = await axios.get(`https://api.github.com/users/${user}`, config);

        if (
            name &&
            name.length
        ) {
            d.name = name
        }

        if (
            email &&
            email.length
        ) {
            d.email = email
        } else {
            d.email = `${id}+${user}@users.noreply.github.com`
        }

        contributors.push(d);
    }

    const file = ["# Contributors"];

    for(
        const { 
            username, 
            email, 
            name 
        } of contributors
            .filter(c => !(c.name.includes("[bot]") || c.username.includes("[bot]")))
            .sort((a, b) => a.name.localeCompare(b.name))
    ) {
        const em = email.replace("[bot]", "");
        const emLength = em.length;

        let formattedEmail = `<${em}>`;

        if(!email.endsWith("github.com")) {
            censoredEmail = ``
        }

        file.push(`* ${name} (@${username}) ${formattedEmail && formattedEmail.length ? `<${formattedEmail}>` : ``}`);
    }

    writeFileSync(
        resolve(process.cwd(), "CONTRIBUTORS.md"),
        file.join("\n")
    );
}

run();