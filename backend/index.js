const express = require("express");
const cors = require("cors");
const db = require("./config/database.js");
const Router = require("./routes/routes.js");
const app = express();
app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000', // Дозволяє запити тільки з цього походження
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Дозволені методи
    allowedHeaders: ['Content-Type', 'Authorization'], // Дозволені заголовки
    credentials: true, // Дозволяє передачу cookie
}));
app.use(express.json());
app.use('/api', Router);

app.listen(5000, () => console.log('Server running at http://localhost:5000'));
