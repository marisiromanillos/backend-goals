const express = require("express");
const router = express.Router();
const asyncMySql = require("../mySQL/connection");

router.post("/add_goal", (req, res) => {
  const { goal, call_to_action } = req.body;
  try {
    const result = asyncMySql(addGoal(goal, call_to_action));
    res.send({ status: 1, userId: result.insertId });
  } catch (error) {
    console.log(error);
    res.send({ status: 0, reason: error.sqlMessage });
  }
});
