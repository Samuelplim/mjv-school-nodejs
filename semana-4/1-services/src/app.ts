import express, { Request, Response, Router } from "express";
import cors from "cors";

import routers from "./routers";
const app = express();

app.use(cors());
app.use(express.json());
app.use(routers);

const port = 3000;

app.listen(port, () => {
  console.log("Aplicação online na porta: ", port);
});
