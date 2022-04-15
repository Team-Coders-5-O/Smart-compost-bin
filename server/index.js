const express = require("express");
const cors = require("cors")
const app = express();
const bodyParser = require("body-parser")
const mysql = require("mysql");
const db = mysql.createPool({
     host: "localhost",
     user: "root",
     password: "",
     database: "smartcompostbin"
})


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/insert", (req, res) => {

    const Email = req.body.Email
    const Password = req.body.Password

    const sqlInsert = "INSERT INTO users VALUES (?,?)"
    db.query(sqlInsert, [Email, Password], (err,result) =>{

        console.log(err);

    })
    // const sqlInsert = "INSERT INTO users VALUES ('vinukawi10@gmail.com', 'Vinuka', 'vinux123');"
    // db.query(sqlInsert, (err, result)=>{
    //     res.send("hello")
    // })
    
})

app.listen(3001, () => {
    console.log("running on 3001")
})
