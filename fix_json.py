import re

with open(r'd:\Real web\syllabus\punjab_board_syllabus.json', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix all LaTeX backslashes that aren't already escaped
content = re.sub(r'(?<!\\)\\(?!["\\/bfnrtu])', r'\\\\', content)

with open(r'd:\Real web\syllabus\punjab_board_syllabus.json', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed all escape sequences")
