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
for f in files:
    shutil.copyfile(f['original'], f['target'])

default_package = 'package.json'

# dirs = list(
#     filter(
#         lambda x: os.path.isdir(
#             x
#         ),
#         map(
#             lambda y: f'../dist/{y}',
#             os.listdir('../dist')
#         )
#     )
# )

# for dir in dirs:
#     shutil.copyfile(default_package, f'{dir}/package.json')

