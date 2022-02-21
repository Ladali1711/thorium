const welcome = require('../loggerfolder/logger')
const helper = require('../utilfolder/helper')
const formatter = require('../validator/formatter')
const lodash=require('lodash')
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    welcome.welcome()
    helper.date();
    helper.Month();
    helper.batchInfo();
   
    console.log(formatter.trim('          ladali        '));
    console.log(formatter.lowercase('LadAlI'));
    console.log(formatter.uppercase('ladali'));

    res.send('My first ever api of the week')
});
router.get('/hello', function (req, res) {
    console.log(lodash.chunk(['JAN', 'FEB', 'MAR', 'APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'], 3))
console.log(lodash.tail([1,3,5,7,9,11,13,15,17,19]))
console.log(lodash.union([2], [1, 2],[3,3,4,2],[9,8,4,3],[1,1,2,2,3]))
console.log(lodash.fromPairs([['horror','The_Shining'],['drama','Titanic'],['thriller','Shutter_Island'],['fantasy','Pans_Labyrinth']]))
    
    res.send('My first ever api of the week')
});
module.exports = router;