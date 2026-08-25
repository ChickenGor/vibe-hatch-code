import test from 'node:test';
import assert from 'node:assert/strict';
import { parseCodebaseFiles, buildFileTree, validateFileTags, cleanMarkdownForDisplay } from '../lib/prompt-helpers.js';

test('parseCodebaseFiles matches standard file tags', () => {
  const text = `
Here is my component:
<file path="components/Button.jsx">
export default function Button() { return <button>Click</button> }
</file>
  `;
  const result = parseCodebaseFiles(text);
  assert.deepEqual(result, {
    'components/Button.jsx': 'export default function Button() { return <button>Click</button> }'
  });
});

test('parseCodebaseFiles ignores other content', () => {
  const text = 'Just plain text without file tags';
  const result = parseCodebaseFiles(text);
  assert.deepEqual(result, {});
});

test('buildFileTree structures directory hierarchies', () => {
  const files = {
    'app/page.js': 'content1',
    'app/layout.js': 'content2',
    'lib/utils.js': 'content3',
    'root-file.txt': 'content4'
  };
  const tree = buildFileTree(files);
  
  assert.ok(tree['app']);
  assert.ok(tree['app'].isFolder);
  assert.equal(tree['app'].name, 'app');
  assert.ok(tree['app'].children['page.js']);
  assert.ok(!tree['app'].children['page.js'].isFolder);
  assert.equal(tree['app'].children['page.js'].path, 'app/page.js');
  
  assert.ok(tree['lib']);
  assert.ok(tree['lib'].isFolder);
  assert.ok(tree['root-file.txt']);
  assert.ok(!tree['root-file.txt'].isFolder);
});

test('validateFileTags flags mismatched opening/closing tags', () => {
  const text = `
<file path="components/Button.jsx">
export default function Button() {}
  `;
  const validation = validateFileTags(text);
  assert.equal(validation.isValid, false);
  assert.ok(validation.errors.some(e => e.includes('Mismatched tags')));
});

test('validateFileTags flags tags missing path attribute', () => {
  const text = `
<file>
some code
</file>
  `;
  const validation = validateFileTags(text);
  assert.equal(validation.isValid, false);
  assert.ok(validation.errors.some(e => e.includes("Missing 'path' attribute")));
});

test('validateFileTags flags duplicate file paths', () => {
  const text = `
<file path="app/page.js">
page 1
</file>
<file path="app/page.js">
page 2
</file>
  `;
  const validation = validateFileTags(text);
  assert.equal(validation.isValid, false);
  assert.ok(validation.errors.some(e => e.includes('Duplicate file paths detected')));
});

test('cleanMarkdownForDisplay transforms file tags into codeblocks', () => {
  const text = '<file path="test.py">\nprint("hello")\n</file>';
  const cleaned = cleanMarkdownForDisplay(text);
  assert.ok(cleaned.includes('**File: `test.py`**'));
  assert.ok(cleaned.includes('```py'));
});
