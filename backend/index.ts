import express, {Application, Request, Response} from "express";
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

app.get("/data", (req: Request, res: Response) => {
    pool.query('SELECT * FROM data', (err: any, rows: any) => {
        if (err) {
            console.log(err)
            res.status(500).send("error connecting with database")
            return;
        }
        res.json(rows)
    });
})

app.post("/", (req: Request, res: Response) => {
    const {username, password} = req.body;
    console.log("data:", username, password)
    
    const response = {
        messsage: `my name is ${username} & my password is ${password}`
    }

    res.status(200).send(response);
});

app.delete("/delete/:id", (req: Request, res: Response) => {
    const getID = parseInt(req.params.id, 10)

    pool.query("DELETE FROM data WHERE id = ?", [getID], (err, rows) => {
        if (err) {
            console.log(err)
            return res.status(500).send("Error query from database")
        } else if (rows.affectedRows === 0) {
            console.log(err)
            return res.status(404).send("data is not found")
        }

        res.status(200).send(`data has been deleted ${getID}`)
    });
});

app.put("/update/:id", (req: Request, res: Response) => {
    const getID = parseInt(req.params.id, 10);
    const {fullname, username, password} = req.body

    pool.query("UPDATE data SET fullname = ?, username = ?, password = ? WHERE id = ?", 
    [fullname, username, password, getID], (err, rows) => {
        if (err) {
            console.log(err)
            return res.status(500).send("error updating data")
        }

        res.json(`data has been update`)
    })

})

app.get("/", (req: Request, res: Response) => {
    res.send("hello first tsc with express")
});

app.listen(port, () => {
    console.log("server run on port:8000")
});
