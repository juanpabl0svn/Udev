import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { PORT } from "./constants.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Alive");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
