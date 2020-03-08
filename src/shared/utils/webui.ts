export const createMount = (document) => {
    const mount = document.createElement("div");

    mount.id = "app";

    document.body.insertAdjacentElement('afterbegin', mount);
}