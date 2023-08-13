const express = require('express')
const router = express.Router()
const UserAuthenticationController = require('../controller/UserAuthenticationController')


router.post('/register', UserAuthenticationController.register)
// router.post('/code-confirmation', UserAuthenticationController.codeConfirmation)
router.post('/code-confirmation/:email', UserAuthenticationController.codeConfirmation)
router.post('/login', UserAuthenticationController.login)

// router.get("/", findAllUsers);


// router.get("/:id", findOneUser);


// router.put("/:id", updateUser);


// router.delete("/:id", deleteAUser);


module.exports = router