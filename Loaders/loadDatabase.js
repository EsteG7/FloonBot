const mysql = require("mysql")

module.exports = async () => {

  let db = await mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    //Mettre le nom de ta database
    database: "floon"

  })

  return db;
}