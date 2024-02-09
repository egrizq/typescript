import express, { Application } from "express";
import bodyparser from "body-parser";
import { CreateUsers } from "./controllers/createUser";
import { ShowUsers } from "./controllers/showUsers";

const app:Application = express();
const port = process.env.PORT || 8000;
app.use(bodyparser.json()); // used to get the body alongside with json!

app.get("/", ShowUsers)
app.post("/create", CreateUsers)

app.listen(port, () => {
    console.log("Server is running in port http://localhost:8000/")
})