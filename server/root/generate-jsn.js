const Promise = require('bluebird');

const constants = require('./../../lib/constants');

module.exports = (req, res) => {
    const { domain } = req.params;

    Promise.resolve()
        .then(() => req.app.get(constants.appKeys.warpCore).getDomainByName(domain))
        .then((domainModel) => domainModel.toJSON())
        .then((json) => {
            res.set('Content-Disposition', `inline; filename="${domain}.json"`);
            res.json(json);
        })
        .catch((err) => {
            console.error("Error generating JSN file:", err);
            res.status(500).send(`Error generating JSN file for '${domain}'.`);
        })
    ;
};
