import { Request, Response, Router } from "express";
import studentsServices from "../services/students.services";

const studentsRouter = Router();

studentsRouter.get("/", (req: Request, res: Response) => {
  const students = studentsServices.getAll();
  res.send(students);
});
studentsRouter.get("/:document", (req: Request, res: Response) => {
  const student = studentsServices.getByDocument(req.params.document);

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
  studentsServices.create(req.body);
  res.send({ message: "Estudante adicionado" }).status(201);
});

studentsRouter.delete("/remove/:document", (req: Request, res: Response) => {
  try {
    studentsServices.remove(req.params.document);
    res.status(200).send({ message: "Estudante removido com sucesso!" });
  } catch (error: any) {
    console.log("entrou");
    res.status(400).send({ message: error.message });
  }
});

studentsRouter.put("/:document", (req: Request, res: Response) => {
  try {
    studentsServices.update(req.params.document, req.body);

    res.status(200).send({ message: "Estudante atualizado!" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

export default studentsRouter;
