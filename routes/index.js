const express = require('express');
const sh = require('shelljs');
const router = express.Router();

router.get('/', function (req, res) {
    let commandResponse = sh.exec(['Rscript', './bin/rCommand.r'].join(' '));
    res.status(200).send('Server response: ' + commandResponse);
});

module.exports = router;
