import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

// Enable CORS for React app
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Your real Pexels API key here
const PEXELS_API_KEY = "YOUR_REAL_PEXELS_KEY";

app.get("/search", async (req, res) => {
  try {
    const query = req.query.query;
    const per_page = req.query.per_page || 6;

    const response = await axios.get("https://api.pexels.com/v1/search", {
      headers: { Authorization: PEXELS_API_KEY },
      params: { query, per_page },
    });

    res.json(response.data);
  } catch (err) {
    console.error(err.response ? err.response.data : err);
    res.status(500).json({ error: "Pexels API request failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));