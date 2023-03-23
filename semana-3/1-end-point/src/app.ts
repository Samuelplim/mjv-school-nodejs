import express, { Request, Response, Router } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const helthCheck = { message: "Aplicação funcionando com sucesso!" };
  res.send(helthCheck);
});

app.use(router);
const port = 3000;

app.listen(port, () => {
  console.log("Aplicação online na porta: ", port);
});
