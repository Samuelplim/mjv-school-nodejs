import { Router } from "express";
import healthRouter from "./health.router";
import studentsRouter from "./students.router";
import whatsappRouter from "./whatsapp.router";

const routers = Router();

routers.use("/health", healthRouter);
routers.use("/students", studentsRouter);
routers.use("/whatsapp", whatsappRouter);

export default routers;
