let obj = require('./logger')
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.printMessage('thorium')
    // console.log(obj.endpoint)
    console.log(obj.url)
    res.send('My first ever api of the week')
});

module.exports = router;