const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  port: 3307,
  database: "goals",
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
