import { Router } from "express";
import whatsappRouter from "./whatsapp.router";
import sessionRouter from "./session.router";
import customerRouter from "./customer.router";

const routers = Router();

routers.use("/whatsapp", whatsappRouter);
routers.use("/session", sessionRouter);
routers.use("/customer", customerRouter);

export default routers;
