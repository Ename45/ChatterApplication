const express = require("express");

const router = express.Router();


// router.route('/signUp').post(signUp)
//  Create User
router.post('/', (req, res) => {
  res.status(501).json({error: 'Not implemented'})
})

// Get All Users
router.get("/", (req, res) => {
  res.status(501).json({ error: "Not implemented" });
});

// Get one User
router.get("/:id", (req, res) => {
  const { id } = req.params
  res.status(501).json({ error: `Not implemented: ${id}`});
});

// Update User
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not implemented: ${id}` });
});

// delete User
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not implemented: ${id}` });
});


router.post("/signUp", signUp)

module.exports = router;
