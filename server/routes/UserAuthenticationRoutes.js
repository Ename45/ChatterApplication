const express = require('express')
const router = express.Router()
const UserAuthenticationController = require('../controller/UserAuthenticationController')


router.post('/register', UserAuthenticationController.register)

router.post('/code-confirmation/:email', UserAuthenticationController.codeConfirmation)
router.post('/login', UserAuthenticationController.login)

router.get("/", UserAuthenticationController.findAllUsers);


router.get("/:id", UserAuthenticationController.findOneUser);


router.put("/:id", UserAuthenticationController.updateUser);


router.delete("/:id", UserAuthenticationController.deleteUser);


module.exports = router