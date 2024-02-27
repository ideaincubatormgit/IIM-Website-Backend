import express from "express";

const router = express.Router();

// Define routes for admin-related endpoints
router.get("/", (req, res) => {
  res.send("Admin route: GET /admin");
});

router.post("/", (req, res) => {
  res.send("Admin route: POST /admin");
});

// Add more routes as needed

export default router;
