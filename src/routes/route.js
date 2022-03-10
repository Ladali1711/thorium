const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const MiddleWare = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)


router.post("/login", userController.loginUser)


router.get("/users/:userId", userController.getUserData)
router.post("/users/:userId/posts", userController.postMessage)

router.get("/users/:userId", MiddleWare.authenticate, MiddleWare.authorize, userController.getUser)

router.put("/users/:userId", MiddleWare.authenticate, MiddleWare.authorize, userController.updateUserData)

router.delete('/users/:userId',MiddleWare.authenticate, MiddleWare.authorize, userController.deleteUserData)

router.put("/users/:userId", userController.updateUser)
router.delete('/users/:userId', userController.deleteUser)

module.exports = router; 