const { writeFileSync } = require("fs");
const { resolve } = require("path");

const config = {
    method: "GET",
	headers: {
		authorization: process.env.ROBOT_TOKEN
			? `token ${process.env.ROBOT_TOKEN}`
			: ``,
	},
};

const run = async () => {
	const repos = [
		"dothq/browser",
		"dothq/browser-desktop",
		"dothq/browser-android",
	];

    const disallowedLogins = [
        "dothq-robot",
        "EnderDev", // Excluded as contributions should be under @kierandrewett instead
    ];

	const users = new Set();

	for await (const repo of repos) {
		const data = await (await fetch(
			`https://api.github.com/repos/${repo}/contributors?per_page=100`,
			config
		)).json();

		data.forEach((u) => {
            if (!disallowedLogins.includes(u.login)) {
                users.add(u.id);
            }
        });
	}

	const contributors = [];

	for await (const user of Array.from(users)) {
		const d = { username: "", name: "" };

		const { login, name } = await (await fetch(
			`https://api.github.com/user/${user}`,
			config
		)).json();

		d.username = login;
		d.name = name && name.length ? name : login;

		contributors.push(d);
	}

	const file = [
        "# Contributors",
        "",
        "## Mozilla Contributors",
        "",
        "Dot Browser could never exist without Mozilla Firefox, so we would like to give our thanks to all those who have worked on it over the years.",
        "",
        "You can see a list of these people at [mozilla.org/credits](https://www.mozilla.org/credits/).",
        "",
        "## Dot Browser Contributors",
        "",
        "Thank you to the following people for their help with making Dot Browser what it is today:",
        ""
    ];

	for (const { username, name } of contributors
		.filter(
			(c) =>
				!(
					c.name.includes("[bot]") ||
					c.username.includes("[bot]")
				)
		)
		.sort((a, b) => a.name.localeCompare(b.name))) {

		file.push(
			`* ${name} ([@${username}](https://github.com/${username}))`
		);
	}

	writeFileSync(
		resolve(process.cwd(), "CONTRIBUTORS.md"),
		file.join("\n")
	);
};

run();
