import express, {Application, Request, Response, NextFunction} from "express";
import bodyparser from "body-parser";
import mysql from "mysql"

const app: Application = express();
const port = process.env.PORT || 8000; // todo set the port
app.use(bodyparser.json()) // used to parsed the json

const pool = mysql.createPool({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "flask"
});

// todo middleware
function dataRequest(req: Request, res: Response, next: NextFunction) {
    const {fullname, username, password} = req.body;
    
    if (!username || !password || !fullname) { // catching empty string
        return res.json({"message" :"some data has missing"})
    }
    
    // passed middleware to controllers
    res.locals.data = {fullname, username, password};     
    console.log("passing middleware")
    next()
}

app.post("/register", dataRequest, (req: Request, res: Response) => {
    // get the data from middleware
    const {fullname, username, password} = req.res?.locals.data
    const data = `username: ${username}, password: ${password}, fullname: ${fullname}`;
    
    pool.query("INSERT INTO data(fullname, username, password) VALUES (?, ?, ?)", [fullname, username, password], 
    (err, rows) => {
        if (err) {
            console.log(err)
            return res.status(500).send("error updating data")
        }
    
        console.log("data has been inserted")
        res.status(200).json(data);
    })
});

app.get("/", (req: Request, res: Response) => {
    pool.query('SELECT * FROM data', (err: any, rows: any) => {
        if (err) {
            console.log(err)
            res.status(500).json({"message": "error connecting with database"})
            return;
        }
        res.json(rows)
    });
});

app.delete("/delete/:id", (req: Request, res: Response) => {
    const getID = parseInt(req.params.id, 10)

    pool.query("DELETE FROM data WHERE id = ?", [getID], (err, rows) => {
        if (err) {
            console.log(err)
            return res.status(500).json("Error query from database")
        } else if (rows.affectedRows === 0) {
            console.log(err)
            return res.status(404).json("data is not found")
        }

        res.status(200).json({"message": `data has been deleted ${getID}`})
    });
});

app.put("/update/:id", (req: Request, res: Response) => {
    const getID = parseInt(req.params.id, 10);
    const {fullname, username, password} = req.body

    pool.query("UPDATE data SET fullname = ?, username = ?, password = ? WHERE id = ?", 
    [fullname, username, password, getID], (err, rows) => {
        if (err) {
            console.log(err)
            return res.status(500).json("error updating data")
        }

        res.json({"message": `data has been update`})
    });
});

app.listen(port, () => {
    console.log("server run on port:8000")
});
