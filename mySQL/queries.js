module.exports = {
  addGoal: (goal, call_to_action) => {
    return `INSERT INTO user_goals (goal, call_to_action) VALUES ('${goal}','${call_to_action}')`;
  },
  getGoals: () => {
    return `SELECT id, goal, call_to_action FROM user_goals`;
  },
  getGoalsRead: (id) => {
    return `SELECT id, goal, call_to_action FROM user_goals WHERE id = ?`;
  },
};
