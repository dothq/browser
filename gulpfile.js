const gulp = require("gulp")
const { spawn } = require("child_process");
const chalk = require("chalk");

let totalTasks = 0;
let logOutput = '';

let electronStarted = false;

const oldConsole = console;

const launchWebpack = (friendlyName, name, options) => {
    if(!options) options = {}
    if(!options.dev) options.dev = false;

    ++totalTasks;

    const webpack = spawn(`cross-env ENV=${process.env.ENV} ${options.dev ? 'webpack-dev-server' : 'webpack'}`, ['--config', name], { stdio: 'pipe', shell: true });

    webpack.stdout.on('data', (data) => {
        console.log(`${chalk.gray(`[${friendlyName}]`)}`, data.toString().replace(/\n/g, `\n${chalk.gray(`[${friendlyName}]`)} `))
        logOutput += data;

        if((logOutput.match(/Version: webpack /g)||[]).length == totalTasks) {
            setTimeout(() => {
                if(electronStarted == false) {
                    electronStarted = true;
                    console.log("🚀 Starting Electron...")
                    spawn('cross-env ENV=development electron', ['.'], { stdio: 'inherit', shell: true });
                }
            }, 2000);
        }
    })
}

gulp.task('start', async () => {
    launchWebpack('main', 'scripts/webpack.config.js') // Main
    launchWebpack('renderer', 'scripts/webpack.renderer.config.js', { dev: true }) // Renderer
});