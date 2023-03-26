import { Router } from "express";
import productsRouter from "./products.router";

const routers = Router();

routers.use("/products", productsRouter);

export default routers;
