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
studentsRouter.get("/:document", (req: Request, res: Response) => {
  const student = students.find((std) => std.document === req.params.document);

  if (!student) {
    res.status(400).send({ message: "Aluno não encontrado!" });
  }
  res.status(200).send(student);
});
studentsRouter.post("/", (req: Request, res: Response) => {
  if (req.body.age < 18) {
    return res.status(400).send({
      message: "Estudante não foi adicionado, pois não tem idade mínima!",
    });
  }
  students.push(req.body);
  res.send({ message: "Estudante adicionado" }).status(201);
});

studentsRouter.delete("/remove/:document", (req: Request, res: Response) => {
  const studentIndex = students.findIndex(
    (student) => student.document === req.params.document
  );
  if (studentIndex === -1) {
    res.status(400).send({ message: "Estudante não encontrado!" });
  }
  students.splice(studentIndex, 1);
  res.status(200).send({ message: "Estudante removido com sucesso!" });
});

studentsRouter.put("/:document", (req: Request, res: Response) => {
  const studentIndex = students.findIndex(
    (student) => student.document === req.params.document
  );
  students[studentIndex] = req.body;
  if (studentIndex === -1) {
    res.status(400).send({ message: "Estudante não encontrado!" });
  }

  res.status(200).send({ message: "Estudante atualizado!" });
});

export default studentsRouter;
