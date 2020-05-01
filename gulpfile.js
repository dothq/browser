const gulp = require("gulp")
const { spawn } = require("child_process");

const launchWebpack = (friendlyName, name, options) => {
    if(!options) options = {}
    if(!options.dev) options.dev = false;

    spawn(`cross-env ENV=${process.env.ENV} ${options.dev ? 'webpack-dev-server' : 'webpack'}`, ['--config', name], { stdio: 'inherit', shell: true });
}

gulp.task('start', async () => {
    launchWebpack('main', 'scripts/webpack.config.ts') // Main
    launchWebpack('renderer', 'scripts/webpack.renderer.config.ts', { dev: true }) // Renderer
});