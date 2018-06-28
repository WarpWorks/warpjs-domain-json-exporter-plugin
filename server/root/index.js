const generateJSN = require('./generate-jsn');

module.exports = {
    get: (req, res) => generateJSN(req, res)
};
