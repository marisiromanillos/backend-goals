module.exports = {
  addGoal: (goal, call_to_action) => {
    return `INSERT INTO user_goals (goal, call_to_action) VALUES ('${goal}','${call_to_action}')`;
  },
};
