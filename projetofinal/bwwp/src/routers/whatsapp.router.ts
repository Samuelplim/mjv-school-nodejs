import { Request, Response, Router } from "express";
import whatsAppServices from "../services/whatsapp.services";

const whatsappRouter = Router();
const whatsServices = whatsAppServices;
whatsAppServices.online();

whatsappRouter.post("/", async (req: Request, res: Response) => {
  await whatsServices.sendMessage(req.body.id);
  res.status(200).send({ message: "mensagem enviada!" });
});

export default whatsappRouter;
