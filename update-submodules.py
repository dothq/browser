import subprocess as sp
import os

raw = sp.getoutput('git submodule')
sm = raw.split('\n')

for i in sm:
    name = i.split(' ')[1]
    basename = name

    if '/' in basename:
        basename = name.split('/')[1]

    command = f"git add {name} && git commit -m \"🆙 Update {basename} submodule\""

    print(command)

    os.system(command)
    