const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./index');
const filespace = require('./_.test');

const { expect } = testHelpers;

describe(filespace(__filename), () => {
  it('exports a class', () => {
    expect(moduleToTest).to.be.a('function');
    expect(moduleToTest).to.have.property('name', 'DomainJsonExporterPlugin');
  });
});
