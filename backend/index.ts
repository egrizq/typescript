import express from "express";
import bodyparser from "body-parser";
import mysql from "mysql"

const app = express();
const port = process.env.PORT || 8000;
app.use(bodyparser.json())

const pool = mysql.createPool({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "flask"
});

app.get("/data", (req, res) => {
    pool.query('SELECT * FROM data', (err: any, rows: any) => {
        if (err) {
            console.log(err)
            res.status(500).send("error connecting with database")
            return;
        }
        res.json(rows)
    });
})

app.post("/", (req, res) => {
    const {username, password} = req.body;
    console.log("data:", username, password)
    
    const response = {
        messsage: `my name is ${username} & my password is ${password}`
    }

    res.json(response);
});

app.get("/", (req, res) => {
    res.send("hello first tsc with express")
});

app.listen(port, () => {
    console.log("server run on port:8000")
});
