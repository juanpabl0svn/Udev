import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import bodyParser from "body-parser";
import crypto from "crypto";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

let BASEDATOS = [
  {
    id: "1234214",
    label: "Prueba 1",
    done: false,
  },
];

app.post("/add", (req, res) => {
  const data = req.body;
  console.log(data);
  BASEDATOS.push(data);
  res.json(data);
});

app.get("/", (req, res) => {
  res.json(BASEDATOS);
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
