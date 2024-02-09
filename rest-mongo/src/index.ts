import express, { Application } from "express";
import bodyparser from "body-parser";
import { CreateUsers } from "./controllers/createUser";

const app:Application = express();
const port = process.env.PORT || 8000;
app.use(bodyparser.json()); // used to get the body alongside with json!

app.post("/", CreateUsers)

app.listen(port, () => {
    console.log("Server is running in port http://localhost:8000/")
})