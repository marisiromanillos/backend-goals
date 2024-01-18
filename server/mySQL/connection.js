const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  database: "goals",
  port: 3306,
});

function asyncMySql(query, params) {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
}
module.exports = asyncMySql;
