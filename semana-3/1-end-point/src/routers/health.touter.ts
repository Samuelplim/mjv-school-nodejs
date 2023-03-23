import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const helthCheck = { message: "Aplicação funcionando com sucesso!" };
  res.send(helthCheck);
});

export default router;
