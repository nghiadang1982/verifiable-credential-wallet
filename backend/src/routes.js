const express = require('express');
const router = express.Router();
const credentialController = require('./controllers/credentialController');

router.post('/issue', credentialController.issueCredential);
router.get('/list', credentialController.listCredentials);
router.get('/credential/:id', credentialController.getCredential);
router.post('/verify', credentialController.verifyCredential);
router.delete('/credential/:id', credentialController.deleteCredential);

module.exports = router;
