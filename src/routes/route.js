const express = require('express')
const router = express.Router()
const bookController = require('../controllers/userController') 

router.get('/test-me', function(req, res){
    res.send({status: true})
})

router.post('/newBook', bookController.newBookData )

router.get('/collectionOfBooks', bookController.getBookData)


module.exports = router;