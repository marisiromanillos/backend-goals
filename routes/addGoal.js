const express = require("express");
const router = express.Router();
const asyncMySql = require("../mySQL/connection");
const { addGoal } = require("../mySQL/queries");

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
