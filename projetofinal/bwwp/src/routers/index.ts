import { Router } from "express";
import healthRouter from "./health.router";
import whatsappRouter from "./whatsapp.router";
import customerRouter from "./customer.router";

const routers = Router();

routers.use("/health", healthRouter);
routers.use("/customer", customerRouter);
routers.use("/whatsapp", whatsappRouter);

export default routers;
