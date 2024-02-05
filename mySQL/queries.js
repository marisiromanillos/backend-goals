module.exports = {
  addGoal: (goal, call_to_action) => {
    return `INSERT INTO 
                   user_goals (goal, call_to_action) 
                        VALUES ('${goal}','${call_to_action}')`;
  },
  getGoals: () => {
    return `SELECT id, goal, call_to_action 
                          FROM user_goals`;
  },
  getGoalsRead: (id) => {
    return `SELECT id, goal, call_to_action 
                   FROM user_goals WHERE id = ?`;
  },
  editGoal: (id, goal, call_to_action) => {
    return `UPDATE user_goals SET goal='${goal}', call_to_action='${call_to_action}' WHERE id=${id}`;
  },
  deleteGoal: (id) => {
    return `DELETE FROM user_goals WHERE id = ?`;
  },
};
