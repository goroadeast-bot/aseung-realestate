const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const script = fs.readFileSync(path.join(__dirname, '../js/script.js'), 'utf8');

for (const configuration of ['absent', 'empty']) {
  test(`initializes when optional Sheets configuration is ${configuration}`, () => {
    const context = {
      document: {
        getElementById: () => null,
        querySelector: () => null,
        querySelectorAll: () => [],
      },
      window: {},
    };
    if (configuration === 'empty') context.SHEET_CSV_URL = '';

    assert.doesNotThrow(() => vm.runInNewContext(script, context));
  });
}
