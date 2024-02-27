import express from "express";

const router = express.Router();

// Define routes for user-related endpoints
router.get("/", (req, res) => {
  res.send("User route: GET /");
});

router.post("/", (req, res) => {
  res.send("User route: POST /");
});

// Add more routes as needed

export default router;
