const credentialService = require('../services/credentialService');

exports.issueCredential = (req, res) => {
    const { claims } = req.body;
    const credential = credentialService.issueCredential(claims);
    res.json(credential);
};

exports.listCredentials = (req, res) => {
    res.json(credentialService.listCredentials());
};

exports.getCredential = (req, res) => {
    const id = req.params.id;
    const credential = credentialService.getCredential(id);
    if (!credential) return res.status(404).json({ error: 'Not found' });
    res.json(credential);
};

exports.verifyCredential = (req, res) => {
    const { credential } = req.body;
    const isValid = credentialService.verifyCredential(credential);
    res.json({ valid: isValid });
};

exports.deleteCredential = (req, res) => {
    const id = req.params.id;
    const success = credentialService.deleteCredential(id);
    res.json({ success });
};
