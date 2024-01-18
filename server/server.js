const express = require("express");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const asyncMySql = require("./mySQL/connection");

// Instance of express
const app = express();

// Use Helmet middleware for enhanced security
app.use(helmet());

// Convert the body to JSON
app.use(express.json());

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log(`The server is running on port ${port} `);
});

// Security - cors
app.use(cors());
