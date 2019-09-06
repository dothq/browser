import { fusebox, sparky } from 'fuse-box';

class Context {
  isProduction: any;
  runServer: any;
  getMainConfig() {
    return fusebox({
      output: 'dist/main/$name-$hash',
      target: 'electron',
      homeDir: 'src/main',
      entry: 'index.ts',
      useSingleBundle: true,
      dependencies: {
        ignoreAllExternal: false,
        ignorePackages: ['react-native', 'electron'],
      },
      logging: { level: 'succinct' },
      cache: {
        enabled: true,
        root: '.cache/main',
      },
    });
  }
  launch(handler) {
    handler.onComplete(
      (output: { electron: { handleMainProcess: () => void } }) => {
        output.electron.handleMainProcess();
      },
    );
  }
  getRendererConfig() {
    return fusebox({
      output: 'dist/renderer/$name-$hash',
      target: 'electron',
      homeDir: 'src/renderer/app',
      entry: 'index.tsx',
      useSingleBundle: true,
      dependencies: {
        include: ['tslib'],
        ignorePackages: ['react-native', 'electron'],
      },
      logging: { level: 'succinct' },
      webIndex: {
        publicPath: './',
        template: 'static/pages/app.html',
      },
      cache: {
        enabled: false,
        root: '.cache/renderere',
      },
      devServer: {
        httpServer: false,
        hmrServer: { port: 4444 },
      },
    });
  }
}
const { task, rm } = sparky<Context>(Context);

task('default', async ctx => {
  await rm('./dist');

  const rendererConfig = ctx.getRendererConfig();
  await rendererConfig.runDev();

  const electronMain = ctx.getMainConfig();
  await electronMain.runDev(handler => ctx.launch(handler));
});

task('dist', async ctx => {
  await rm('./dist');

  const rendererConfig = ctx.getRendererConfig();
  await rendererConfig.runProd({ uglify: false });

  const electronMain = ctx.getMainConfig();
  await electronMain.runProd({
    uglify: true,
    manifest: true,
    handler: handler => ctx.launch(handler),
  });
});
