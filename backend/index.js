// Import express
// const express = require ("express");
// // Import cors
// const cors = require("cors");
// // Import connection
// const db = require("./config/database.js");
// // Import router
// const Router = require("./routes/routes.js");
import express from "express";
// Import cors
import cors from "cors";
// Import connection
import db from "./config/database.js";
// Import router
import Router from "./routes/routes.js";

// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());
 
// Testing database connection 
/* try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
} */
 
// use router
app.use('/api',Router);
 
// listen on port
app.listen(5000, () => console.log('Server running at http://localhost:5000'));