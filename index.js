const ActionPlugin = require('@warp-works/warpjs-action-plugin');
const RoutesInfo = require('@quoin/expressjs-routes-info');

const constants = require('./lib/constants');
const packageJson = require('./package.json');
const server = require('./server');

class DomainJsonExporterPlugin extends ActionPlugin {
    constructor(config, warpCore, pluginType) {
        super(config, warpCore, packageJson, pluginType);
    }

    get app() {
        return (baseUrl, staticUrl) => server(this.config, this.warpCore, baseUrl, staticUrl);
    }

    get jsScriptUrl() {
        return `${RoutesInfo.expand(constants.routes.assets, {})}/${constants.assets.js}`;
    }

    getRootUrl(domain, type, id) {
        return RoutesInfo.expand(constants.routes.root, { domain, type, id });
    }
}

module.exports = DomainJsonExporterPlugin;
