// Add this to the very top to load your API key from the .env file
require('dotenv').config();

const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();

// Use your newsdata.io API key from the .env file. 
// I've updated the variable name for clarity. Make sure to update your .env file!
// From: NEWS_API_KEY=...
// To:   NEWSDATA_API_KEY=pub_...
const API_KEY = process.env.NEWSDATA_API_KEY || "pub_0e63f510dd5c48cf81c84be68fbd6d89";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Home route: Fetches the latest news about LLMs
app.get("/", async (req, res) => {
    try {
        const response = await axios.get(
            `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=llm&language=en&category=technology`
        );
        
        // FIX: The new API uses `response.data.results`
        const articles = response.data.results || [];
        res.render("index", { news: articles });

    } catch (error) {
        console.error("Error fetching news:", error.message);
        res.render("index", { news: [] });
    }
});

// Search route
app.get("/search", async (req, res) => {
    try {
        const searchTerm = req.query.search;

        // FIX: The search now correctly uses the `searchTerm` variable
        const response = await axios.get(
            `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=${searchTerm}&language=en`
        );
        
        // FIX: The new API uses `response.data.results`
        res.render("index", { news: response.data.results || [] });
        
    } catch (error) {
        console.error("Error fetching search results:", error.message);
        res.render("index", { news: [] });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});