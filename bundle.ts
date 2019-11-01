import { fusebox, sparky } from 'fuse-box';

class Context {
  isProduction: any;
  runServer: any;
  getMainConfig() {
    return fusebox({
      output: 'build/$name',
      target: 'electron',
      homeDir: './',
      entry: 'src/main/index.ts',
      useSingleBundle: true,
      dependencies: { ignoreAllExternal: true },
      logging: { level: 'succinct' },
      cache: {
        enabled: true,
        root: '.cache/main',
      },
    });
  }
  launch(handler: any) {
    handler.onComplete((output: any) => {
      output.electron.handleMainProcess();
    });
  }
  getRendererConfig(env: 'dev' | 'prod') {
    return fusebox({
      output: 'build/$name',
      target: 'electron',
      homeDir: './',
      entry: 'src/renderer/app/index.tsx',
      env: { ENV: env },
      dependencies: { include: ['tslib'] },
      logging: { level: 'succinct' },
      webIndex: {
        publicPath: '../',
        template: 'static/pages/app.html',
      },
      cache: {
        enabled: false,
        root: '.cache/renderere',
      },
      devServer: {
        httpServer: true,
        hmrServer: { port: 4444 },
      },
    });
  }
}
const { task, rm } = sparky<Context>(Context);
const webExternals = ['newtab', 'search', 'settings'];

task('default', async (ctx: any) => {
  await rm('./build');

  const rendererConfig = ctx.getRendererConfig('dev');
  await rendererConfig.runDev();

  // const ntConfig = ctx.getNewtabConfig();
  // await ntConfig.runDev();

  const electronMain = ctx.getMainConfig();
  await electronMain.runDev((handler: any) => ctx.launch(handler));
});


task('dist', async (ctx: any) => {
  await rm('./build');

  const rendererConfig = ctx.getRendererConfig('prod');
  await rendererConfig.runProd({ uglify: false });

  // const ntConfig = ctx.getNewtabConfig();
  // await ntConfig.runDev();

  const electronMain = ctx.getMainConfig();
  await electronMain.runProd({
    uglify: true,
    manifest: true,
    handler: (handler: any) => ctx.launch(handler),
  });
});
