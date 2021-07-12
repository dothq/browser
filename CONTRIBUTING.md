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

## Developing Dot Browser

If you want to test bleeding edge builds of Dot Browser, you can [download them from the release page](https://github.com/dothq/browser-desktop/releases).

To build and contribute to Dot Browser, follow these instructions. 

### Depenancies

First you are going to need to install the folowing programs onto your computer depending on your operating system.

#### Windows
**TODO:** Windwos install docs

#### MacOS
Install xcode's dev tools using the following command:
```bash
xcode-select --install
```
Please install the following packages through [brew](https://brew.sh):
 - `yasm`
 - `nasm`

#### Debian/ubuntu
Please install the following packages through apt:
 - `build-essential`
 - `libpython3-dev`
 - `m4`
 - `nodejs`
 - `unzip`
 - `uuid`
 - `zip`
 - `yarnpkg`
 - `libasound2-dev`
 - `libcurl4-openssl-dev`
 - `libdbus-1-dev`
 - `libdbus-glib-1-dev`
 - `libdrm-dev`
 - `libgtk-3-dev`
 - `libpulse-dev`
 - `libx11-xcb-dev`
 - `libxt-dev`
 - `xvfb`
 - `nasm`
 - `yasm`
 - `libgtk2.0-dev`

#### Arch/manjaro
Ensure you have the following programs installed on your system: 
 - `git`
 - `nodejs`
 - `yarn`
 
Then run the bootstrapping script to get all of your dependancies installed:
```bash
git clone https://github.com/dothq/browser-desktop
cd browser-desktop
# Melon is the build tool used to develop dot browser
./melon boostrap
```

### First build
First, clone the repository containing the code for the desktop browser:
```bash
git clone https://github.com/dothq/browser-desktop
cd browser-desktop
```
Now we need to download the source code from firefox. To do this run:
```bash
./melon download
```
This will download the firefox source code. Once it has compleated, run:
```bash
./melon import
```
This applies the custom changes that make Dot Browser special. Once it it has compleated, you can start compiling the browser:
```bash
./melon build
```
This can take anywhere between half an hour to an hour and a half depending on how good your computer is. Once it has finished, run:
```bash
./melon run
```

## Plugins

Dot Browser splits the components of the app into plugins, these can be found at [dothq/plugins](https://git.dothq.co/plugins).

For example, the addressbar's plugin name is [`@dothq/addressbar`](https://npm.im/@dothq/addressbar)

## File Structure

`src/desktop` - Electron files for Dot Browser.
`src/android` - Android files for Dot Browser.
`src/ios` - iOS files for Dot Browser.
`src/ui` - React files for Dot Browser.

## Environment Variables

- `NODE_ENV` is set to `production` when compiled and distributed. This has a number of effects:
  - All files are uglified and minified
  - Dot switches to using the `dot://` protocol for Web UI pages
  - The code will be harder to modify in `production`

[electronjs.org]: https://electronjs.org
[electron/electron]: https://github.com/electron/electron
[electron/electron-i18n]: https://github.com/electron/electron-i18n

## Need Help?

If any of this information confusing, incorrect, or incomplete, feel free to
[open an issue](https://github.com/dothq/browser/issues/new) or [join our discord](https://invite.gg/dot)
for help.
