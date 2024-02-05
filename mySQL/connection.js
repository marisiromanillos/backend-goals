const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "mrbuildm_goals",
  password: "Ellabailasola25?",
  host: "api.achievegoals.marisiromanillos.co.uk",
  port: 3307,
  database: "mrbuildm_goals",
});

function asyncMySql(query, params) {
  return new Promise((resolve, reject) => {
    connection.query(query, params, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
}

module.exports = asyncMySql;
