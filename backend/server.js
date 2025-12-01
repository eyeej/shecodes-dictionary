import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

// FIX CORS COMPLETELY
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const PEXELS_API_KEY = "eB4rh2l1HxAEaoUYEFyxj7tcoB8PxfeO0GiWUCq1CfV2rRl9hTZpPtU2";