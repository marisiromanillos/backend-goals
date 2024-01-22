module.export = {
  addGoal: (goal, call_to_action) => {
    return `INSERT INTO user_goals (goal, callToAction) VALUES ('${goal}','${call_to_action}')`;
  },
};
