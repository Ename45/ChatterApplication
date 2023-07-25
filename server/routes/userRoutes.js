const express = require("express");
const router = express.Router();
const { createUser, findOneUser, findAllUsers, updateUser, deleteAUser } = require('../controllersRepo/userController')

// router.post("/signUp", signUp);

//  Create User
router.post('/', createUser)

// Get All Users
router.get("/", findAllUsers);

// Get one User
router.get("/:id", findOneUser);

// Update User
router.put("/:id", updateUser);

// delete User
router.delete("/:id", deleteAUser);


// router.post("/signUp", signUp)

module.exports = router;
