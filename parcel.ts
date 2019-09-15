const Bundler = require('parcel-bundler');
const Path = require('path');
const app = require('express')();
const npmRun = require('npm-run');

const file = Path.join(__dirname, './src/**/*.ts*');

const options = {
  outDir: './dist',
  publicUrl: './',
  watch: true,
  cache: true,
  serverPort: 4444,
  cacheDir: '.cache',
  contentHash: false,
  minify: false,
  scopeHoist: false,
  target: 'electron',
  https: false,
  logLevel: 3,
  hmrPort: 0,
  sourceMaps: true,
  hmrHostname: '',
  detailedReport: false,
};

async function runBundle() {
  const bundler = new Bundler(file, options);

  app.use(bundler.middleware());

  const bundle = await bundler.serve().then(server => {
    npmRun.exec('npm run start', { cwd: __dirname }, function(
      err,
      stdout,
      stderr,
    ) {});

    console.log(server);
  });
}

runBundle();
