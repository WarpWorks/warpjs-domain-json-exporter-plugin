const _ = require('lodash');
const ActionPlugin = require('@warp-works/warpjs-action-plugin');
const packageJson = require('./../package.json');

const NAMESPACE = 'W2:plugin:domain-json-exporter';

module.exports = Object.freeze(_.extend({}, ActionPlugin.baseConstants(packageJson), {
    routes: Object.freeze({
        assets: `${NAMESPACE}:assets`,
        root: `${NAMESPACE}:root`
    })
}));
