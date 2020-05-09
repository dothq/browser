import gulp from 'gulp';
import { spawn } from 'child_process';

const launchWebpack = (name: string, options?: any) => {
    if(!options) options = {}
    if(!options.dev) options.dev = false;

    spawn(`cross-env ENV=${process.env.ENV} ${options.dev ? 'webpack-dev-server' : 'webpack'}`, ['--config', name], { stdio: 'inherit', shell: true });
}

gulp.task('start', async () => {
    launchWebpack('scripts/webpack.config.ts') // Main
    launchWebpack('scripts/webpack.renderer.config.ts', { dev: process.env.ENV == "development" }) // Renderer
});
