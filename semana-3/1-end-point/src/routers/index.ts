import { Router } from "express";
import healthRouter from "./health.router";
import studentsRouter from "./students.router";

const routers = Router();

routers.use("/health", healthRouter);
routers.use("/students", studentsRouter);

export default routers;
