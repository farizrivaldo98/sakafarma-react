const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "parammachine_saka",
  port: 3306,
});

// host: "localhost",
// user: "root",
// password: "password",
// database: "parammachine_saka",
// port: 3306,

// host: "10.126.15.138",
// user: "ems_saka",
// password: "s4k4f4rmA",
// database: "parammachine_saka",
// port: 3306,

db.connect((err) => {
  if (err) {
    return console.log(`error : ${err.message}`);
  }
  console.log("connect to mysql");
});

module.exports = { db };
