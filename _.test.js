const testHelpers = require('@quoin/node-test-helpers');

const { filespace } = testHelpers;

module.exports = (filename) => filespace(filename, __dirname);
