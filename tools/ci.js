const { spawn } = require('child_process');
const { platform } = require('os');

let npmCmd = platform() === 'win32' ? 'npm.cmd' : 'npm';

const compileFor = (os) => {
  if (os == 'win32') spawn(npmCmd, ['run', 'compile-win32'], { cwd: __dirname, stdio: 'inherit' });
  else if (os == 'darwin') spawn(npmCmd, ['run', 'compile-darwin'], { cwd: __dirname, stdio: 'inherit' });
  else if (os == 'linux') spawn(npmCmd, ['run', 'compile-linux'], { cwd: __dirname, stdio: 'inherit' });
  else if (os != 'linux') spawn(npmCmd, ['run', 'compile-linux'], { cwd: __dirname, stdio: 'inherit' });
};

if (platform() == 'win32') compileFor('win32');
else if (platform() == 'darwin') compileFor('darwin');
else if (platform() == 'linux') compileFor('linux');
