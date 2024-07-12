
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Import routes
const boardGameRoutes = require("./routes/boardGameRoutes");

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// Use routes
app.use("/api/boardgames", boardGameRoutes);

// Database connection
mongoose.connect("mongodb://localhost:27017/boardgamecafe", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Start server
app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`);
});
