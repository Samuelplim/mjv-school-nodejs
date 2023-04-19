import { Request, Response, Router } from "express";
import sessionServices from "../services/session.services";
const sessionRouter = Router();

sessionRouter.post("/", async (req: Request, res: Response) => {
  await sessionServices.create(req.body);
  res.status(201).send({ message: "Usuario criado" });
});

export default sessionRouter;
