const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 

app.get("/search", async (req, res) => {
  try {
    const { query, per_page } = req.query;
    const PEXELS_API_KEY = "eB4rh2l1HxAEaoUYEFyxj7tcoB8PxfeO0GiWUCq1CfV2rRl9hTZpPtU2";
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${per_page || 1}`;

    const response = await axios.get(pexelsUrl, {
      headers: {
        Authorization: PEXELS_API_KEY
      }
    });

    res.json(response.data);
  } catch (err) {
    console.error("Error fetching Pexels:", err.message);
    res.status(500).json({ error: "Error fetching from Pexels" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});