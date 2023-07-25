const express = require("express");

const router = express.Router();

// router.route('/signUp').post(signUp)
//  Create Feed
router.post("/", (req, res) => {
  res.status(501).json({ error: "Not implemented" });
});

// Get All Feeds
router.get("/", (req, res) => {
  res.status(501).json({ error: "Not implemented" });
});

// Get one Feed
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not implemented: ${id}` });
});

// Update Feed
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not implemented: ${id}` });
});

// delete Feed
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not implemented: ${id}` });
});

// router.post("/signUp", signUp);

module.exports = router;
