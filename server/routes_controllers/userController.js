const express = require("express");
const {getAllUsers, getUserById, saveNewUser, updateUserDetail, removeUserFromList} = require("../repositories/userRepository")

const router = express.Router


router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', saveNewUser)
router.patch('/:id', updateUserDetail)
router.delete('/:id', removeUserFromList)


module.exports = router