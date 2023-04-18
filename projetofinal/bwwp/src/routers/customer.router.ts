import { Request, Response, Router } from "express";
import customerServices from "../services/customer.services";

const customerRouter = Router();

customerRouter.get("/", async (req: Request, res: Response) => {
  try {
    const customers = await customerServices.getBlockedCustomersReport();

    res.status(200).send({ customers });
  } catch (error) {
    res.status(500).send(error);
  }
});

customerRouter.post("/", async (req: Request, res: Response) => {
  try {
    res.status(200).send({ any: "nada por enquanto" });
  } catch (error) {
    res.status(500).send(error);
  }
});

export default customerRouter;
