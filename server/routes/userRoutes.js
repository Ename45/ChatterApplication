const express = require("express");
const { signUp, getAllUsers } = require("../controllersRepo/userController");

const router = express.Router();


// router.route('/signUp').post(signUp)
router.post("/signUp", signUp)
router.get("/", getAllUsers)

module.exports = router;
