const mysql = require("mysql")
const { USER, DATABASE, MDP, HOST } = require("../Secret/db.json")

module.exports = async () => {

  let db = await mysql.createConnection({

    host: HOST,
    user: USER,
    password: MDP,
    //Mettre le nom de ta database
    database: DATABASE

  })

  return db;
}