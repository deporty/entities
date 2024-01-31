import os
import shutil
os.system('cd .. && npm run compile')

files = [
    {
        'original': r'../package.json',
        'target': r'../dist/package.json'
    },
    {
        'original': r'../.npmrc',
        'target': r'../dist/.npmrc'
    }
]

if not os.path.exists("../dist"):
    os.mkdir("../dist")

for f in files:
    shutil.copyfile(f['original'], f['target'])

default_package = 'package.json'

