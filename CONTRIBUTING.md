# A guide to contributing to Dot

Thanks for taking the time to contribute to Dot!

The following is a set of guidelines for contributing to Dot Browser
on GitHub. These are just guidelines, not rules, so use your best judgment and
feel free to propose changes to this document in a pull request.

## Table of Contents

- [Issues and Pull Requests](#issues-and-pull-requests)
- [Commit Messages and Pull Request Titles](#commit-messages-and-pull-request-titles)
  - [Pull Request Title](#pull-request-title)
- [Running the application](#running-the-application)
- [Plugins](#plugins)
- [File Structure](#file-structure)
- [Environment Variables](#environment-variables)
- [Need Help?](#need-help)

## Issues and Pull Requests

* If you're not sure about adding something, [open an issue](https://github.com/dothq/browser/issues/new) to discuss it.
* Feel free to open a Pull Request early so that a discussion can be had as changes are developed.
* Include screenshots and animated gifs of your changes whenever possible.

## Commit Messages and Pull Request Titles

We use the [Gitmoji](https://gitmoji.carloscuesta.me/) specification to standardize our commit history.

The commit message summary (or pull request title) is constructed by prepending the emoji corresponding to your change, followed by your change.
Example: `💄 Updated the style of the UI`

### Pull Request Title

Same as commit messages, prepend the emoji corresponding to your change.
Example: `⚡ Improve performance of the app`

## Running the application

To build and run Dot Browser, follow these simple instructions.

You will need [Git](https://git-scm.com), [Node](https://nodejs.org) and [Yarn](https://yarnpkg.com/) installed for this to work!

```bash
git clone https://git.dothq.co/browser
cd browser
yarn
yarn dev
```

Then open a new terminal window and type:

```bash
yarn start
```

You should now see Dot opening.

Read on for more info about the structure of our app.

## Plugins

Dot Browser splits the components of the app into plugins, these can be found at [dothq/plugins](https://git.dothq.co/plugins).

For example, the addressbar's plugin name is [`@dothq/addressbar`](https://npm.im/@dothq/addressbar)

## File Structure

You can find the `main` electron side of Dot in `src/browser` and you can find the `renderer` side which includes all the UI components and React code at `src/desktop/renderer`.

## Environment Variables

- `NODE_ENV` is set to `production` when compiled and distributed. This has a number of effects:
  - All files are uglified and minified
  - Dot switches to using the `dot://` protocol for Expo pages
  - The code will be harder to modify in `production`

[electronjs.org]: https://electronjs.org
[electron/electron]: https://github.com/electron/electron
[electron/electron-i18n]: https://github.com/electron/electron-i18n

## Need Help?

If any of this information confusing, incorrect, or incomplete, feel free to
[open an issue](https://github.com/dothq/browser/issues/new) or [join our discord](https://invite.gg/dot)
for help.