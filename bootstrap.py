#!/usr/bin/env python
# This script provides one-line bootstrap support to configure systems to build
# the tree. It does so by cloning the Mozilla repo before calling directly into `mach
# bootstrap`, then by cloning the Dot changes onto the Mozilla base

# Note that this script can't assume anything in particular about the host
# Python environment (except that it's run with a sufficiently recent version of
# Python 3), so we are restricted to stdlib modules.
from __future__ import absolute_import, print_function, unicode_literals

import sys
import os
import subprocess
import shutil

from optparse import OptionParser


class Colors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


class Codes:
    ERROR = Colors.FAIL + 'ERROR' + Colors.ENDC + ' '
    INFO = Colors.OKBLUE + 'INFO' + Colors.ENDC + ' '
    SUCCESS = Colors.OKGREEN + 'SUCCESS' + Colors.ENDC + ' '


major, minor = sys.version_info[:2]
if (major < 3) or (major == 3 and minor < 5):
    print(Codes.ERROR + 'Bootstrap currently only runs on Python 3.5+.'
          'Please try re-running with python3.5+.')
    sys.exit(1)


print(Codes.INFO + 'Setting up `Dot Browser (co.dothq.browser)` by `Dot HQ`.')

CLONE_MERCURIAL_PULL_FAIL = Codes.ERROR + '''Failed to pull from hg.mozilla.org.

This is most likely because of unstable network connection.
Try running `cd %s && hg pull https://hg.mozilla.org/releases/mozilla-release` manually.'''

CLONE_GIT_PULL_FAIL = Codes.ERROR + '''Failed to clone from github.com

This is most likely because of unstable network connection.
Try running `cd %s && git clone https://github.com/dothq/browser` manually.'''


SUCCESSFUL_BOOTSTRAP = '''
―――――――――――――――――――――――――――――――――――――――――――――――――――――――――

''' + Codes.SUCCESS + ''' 🎉 You are now ready to build ''' + Colors.BOLD + ''''⭘ Dot Browser''' + Colors.ENDC + '''!

―――――――――――――――――――――――――――――――――――――――――――――――――――――――――
'''

WINDOWS = sys.platform.startswith('win32') or sys.platform.startswith('msys')
VCS_HUMAN_READABLE = {
    'hg': 'Mercurial',
    'git': 'Git',
}


def which(name):
    """Python implementation of which.

    It returns the path of an executable or None if it couldn't be found.
    """
    # git-cinnabar.exe doesn't exist, but .exe versions of the other executables
    # do.
    if WINDOWS and name != 'git-cinnabar':
        name += '.exe'
    search_dirs = os.environ['PATH'].split(os.pathsep)

    for path in search_dirs:
        test = os.path.join(path, name)
        if os.path.isfile(test) and os.access(test, os.X_OK):
            return test

    return None


def validate_clone_dest(dest):
    dest = os.path.abspath(dest)

    if not os.path.exists(dest):
        return dest

    if not os.path.isdir(dest):
        print(Codes.ERROR + 'Destination %s exists but is not a directory.' % dest)
        return None

    if not os.listdir(dest):
        return dest
    else:
        print(Codes.ERROR + 'Destination directory %s exists but is nonempty.' %
              dest)
        return None


def input_clone_dest(no_interactive):
    repo_name = 'dot'
    while True:
        dest = None
        if not dest:
            dest = repo_name
        dest = validate_clone_dest(os.path.expanduser(dest))
        if dest:
            return dest
        if no_interactive:
            return None


def hg_clone_firefox(hg, dest):
    # We create an empty repo then modify the config before adding data.
    # This is necessary to ensure storage settings are optimally
    # configured.
    args = [
        hg,
        # The unified repo is generaldelta, so ensure the client is as
        # well.
        '--config', 'format.generaldelta=true',
        'init',
        dest
    ]
    res = subprocess.call(args)
    if res:
        print(Codes.ERROR + 'Unable to create destination repo; please try cloning manually')
        return None

    # Strictly speaking, this could overwrite a config based on a template
    # the user has installed. Let's pretend this problem doesn't exist
    # unless someone complains about it.
    with open(os.path.join(dest, '.hg', 'hgrc'), 'a') as fh:
        fh.write('[paths]\n')
        fh.write('default = https://hg.mozilla.org/releases/mozilla-release\n')
        fh.write('\n')

        # The server uses aggressivemergedeltas which can blow up delta chain
        # length. This can cause performance to tank due to delta chains being
        # too long. Limit the delta chain length to something reasonable
        # to bound revlog read time.
        fh.write('[format]\n')
        fh.write('# This is necessary to keep performance in check\n')
        fh.write('maxchainlen = 10000\n')

    res = subprocess.call(
        [hg, 'pull', 'https://hg.mozilla.org/releases/mozilla-release'], cwd=dest)
    print(Codes.INFO + 'Cloning `base (Firefox Stable)`, this may take a while...')
    res = subprocess.call([hg, 'update', '-r', 'default'], cwd=dest)
    if res:
        print(CLONE_MERCURIAL_PULL_FAIL % dest)
        return None
    return dest


def git_clone_dot(git, dest):
    res = subprocess.call(
        [git, 'clone', 'https://github.com/dothq/browser.git', 'dotmerge'])
    print(Codes.INFO + 'Cloning `patch (Dot Browser)`, this may take a while...')
    if res:
        print(CLONE_GIT_PULL_FAIL % dest)
        return None

    # Merge all files from Dot Browser into the Firefox source tree
    for src_dir, dirs, files in os.walk('dotmerge'):
        dst_dir = src_dir.replace('dotmerge', 'dot', 1)
        if not os.path.exists(dst_dir):
            os.makedirs(dst_dir)
        for file_ in files:
            src_file = os.path.join(src_dir, file_)
            dst_file = os.path.join(dst_dir, file_)
            if os.path.exists(dst_file):
                # in case of the src and dst are the same file
                if os.path.samefile(src_file, dst_file):
                    continue
                os.remove(dst_file)
            shutil.move(src_file, dst_dir)
    shutil.rmtree('dotmerge')

    return dest


def clone_hg(no_interactive):
    hg = which('hg')
    if not hg:
        print(Codes.ERROR + 'Mercurial is not installed. Mercurial is required to clone '
              'Firefox.')
        print('Try installing hg with `pip3 install Mercurial`.')
        return None
    binary = hg

    dest = input_clone_dest(no_interactive)
    if not dest:
        return None

    return hg_clone_firefox(binary, dest)


def clone_git(no_interactive):
    git = which('git')
    if not git:
        print('Git is not installed. Git is required to clone '
              'Dot Browser.')
        return None
    binary = git

    dest = 'dot'
    if not dest:
        return None

    return git_clone_dot(binary, dest)


def bootstrap(srcdir, application_choice, no_interactive, no_system_changes):
    args = [sys.executable, os.path.join(srcdir, 'mach'), 'bootstrap']
    if application_choice:
        args += ['--application-choice', application_choice]
    if no_interactive:
        args += ['--no-interactive']
    if no_system_changes:
        args += ['--no-system-changes']
    print(Codes.INFO + 'Bootstrapping `base (Firefox Stable)`')
    subprocess.call(args, cwd=srcdir)
    return print(Codes.SUCCESS + 'Bootstrapped `base (Firefox Stable)`')


def main(args):
    parser = OptionParser()
    parser.add_option('--application-choice', dest='application_choice',
                      help='Pass in an application choice (see "APPLICATIONS" in '
                      'python/mozboot/mozboot/bootstrap.py) instead of using the '
                      'default interactive prompt.')
    parser.add_option('--no-interactive', dest='no_interactive', action='store_true',
                      help='Answer yes to any (Y/n) interactive prompts.')
    parser.add_option('--no-system-changes', dest='no_system_changes', action='store_true',
                      help='Only executes actions that leave the system '
                      'configuration alone.')

    options, leftover = parser.parse_args(args)

    try:
        srcdir = clone_hg(options.no_interactive)
        if not srcdir:
            return 1
        print(Codes.SUCCESS + 'Cloned `base (Firefox Stable)`')
        bootstrap(srcdir, options.application_choice,
                  options.no_interactive, options.no_system_changes)
        clone_git(options.no_interactive)
        print(Codes.SUCCESS + 'Cloned `patch (Dot Browser)`')
        return print(SUCCESSFUL_BOOTSTRAP)
    except Exception:
        print(Codes.ERROR + 'Could not bootstrap Dot. Consider filing a bug.')
        raise


if __name__ == '__main__':
    sys.exit(main(sys.argv))

