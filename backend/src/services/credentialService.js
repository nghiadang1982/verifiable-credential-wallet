const crypto = require('crypto');
let credentials = [];

exports.issueCredential = (claims) => {
    const id = crypto.randomUUID();
    const credential = { id, claims, issuedAt: new Date().toISOString() };
    credential.signature = crypto.createHash('sha256').update(JSON.stringify(credential)).digest('hex');
    credentials.push(credential);
    return credential;
};

exports.listCredentials = () => credentials;

exports.getCredential = (id) => credentials.find(c => c.id === id);

exports.verifyCredential = (credential) => {
    const expectedSig = crypto.createHash('sha256').update(JSON.stringify({
        id: credential.id,
        claims: credential.claims,
        issuedAt: credential.issuedAt
    })).digest('hex');
    return expectedSig === credential.signature;
};

exports.deleteCredential = (id) => {
    const index = credentials.findIndex(c => c.id === id);
    if (index === -1) return false;
    credentials.splice(index, 1);
    return true;
};
