import { Router } from "express";
import healthRouter from "./health.router";

const routers = Router();

routers.use("/health", healthRouter);

export default routers;
