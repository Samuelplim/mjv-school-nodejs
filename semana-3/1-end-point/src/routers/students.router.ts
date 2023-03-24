import { Request, Response, Router } from "express";

const studentsRouter = Router();
const students = [
  {
    name: "Samuel Araujo",
    email: "samuel@gmail.com",
    document: "30589362062",
    password: "123456",
    age: "22",
  },
  {
    name: "Sara Araujo",
    email: "sara.araujo@gmail.com",
    document: "30589362062",
    password: "123456",
    age: "20",
  },
  {
    name: "Moda Paula",
    email: "moda@gmail.com",
    document: "1234567890",
    password: "123456",
    age: "24",
  },
  {
    name: "meta facebook",
    email: "meta@meta.com",
    document: "1234567890",
    password: "123456",
    age: "25",
  },
];

studentsRouter.get("/", (req: Request, res: Response) => {
  res.send(students);
});

studentsRouter.post("/", (req: Request, res: Response) => {});

export default studentsRouter;
