const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);

// const sql = `INSERT INTO people(name) values('Wesley')`;
const sqlFindAllUsers = `SELECT * FROM PEOPLE;`;
// connection.query(sql);

app.get("/", (req, res) => {
  connection.query(sqlFindAllUsers, (err, results, fields) => {
    if (err) {
      res.send(`<h1>ERROR</h1><br><br> `);
    }
    res.send(
      `<h1>Full Cycle</h1><br><br> ${JSON.stringify(
        results.map((person) => person.name)
      )}`
    );
  });
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
