const express = require("express");
const router = express.Router();
const { createUser, findOneUser, findAllUsers, updateUser, deleteAUser } = require('../repositories/UserRepository')


router.post('/', createUser)


router.get("/", findAllUsers);


router.get("/:id", findOneUser);


router.put("/:id", updateUser);


router.delete("/:id", deleteAUser);



module.exports = router;
