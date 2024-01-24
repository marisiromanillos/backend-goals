const express = require("express");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const asyncMySql = require("./mySQL/connection");
const { addGoal, getGoals, getGoalsRead } = require("./mySQL/queries");

// Instance of express
const app = express();

// Security - cors
app.use(cors());

// Use Helmet middleware for enhanced security
app.use(helmet());

// Convert the body to JSON
app.use(express.json());

// ROUTES

// POST goal route
app.post("/add_goal", async (req, res) => {
  const { goal, call_to_action } = req.body;
  try {
    const result = await asyncMySql(addGoal(goal, call_to_action));
    res.send({ status: 1, userId: result.insertId });
  } catch (error) {
    console.error(error);
    res.send({ status: 0, reason: error.sqlMessage });
  }
});

// GET goals route
app.get("/goals", async (req, res) => {
  try {
    const result = await asyncMySql(getGoals());
    res.send({ data: result, status: 1 });
    console.log(result);
  } catch (error) {
    console.error(error);
    res.send({ status: 0, reason: error.sqlMessage });
  }
});

// GET goals route READ
app.get("/goals/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await asyncMySql(getGoalsRead(), [id]);
    res.send({ data: result, status: 1 });
    console.log(result);
  } catch (error) {
    console.error(error);
    res.send({ status: 0, reason: error.sqlMessage });
  }
});

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log(`The server is running on port ${port} `);
});
