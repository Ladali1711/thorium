const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const UserIdValidator = require('../middleware/userIdValidate')
const TokenValidator = require('../middleWare/tokenValidate')


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

router.post("/users" , userController.createUser)

router.post("/login", userController.login)

router.get("/users/:userId",UserIdValidator.userIdValidate, TokenValidator.validateToken, userController.getUser)

router.put("/users/:userId",UserIdValidator.userIdValidate, TokenValidator.validateToken, userController.updateUser)

router.delete("/users/:userId", UserIdValidator.userIdValidate, TokenValidator.validateToken, userController.deleteUser)


module.exports = router;