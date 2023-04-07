import { Request, Response, Router } from "express";
import studentsServices from "../services/students.services";

const studentsRouter = Router();

studentsRouter.get("/", async (req: Request, res: Response) => {
  const students = await studentsServices.getAll();
  res.send(students);
});
studentsRouter.get("/:document", async (req: Request, res: Response) => {
  const student = await studentsServices.getByDocument(req.params.document);

  if (!student) {
    res.status(400).send({ message: "Aluno não encontrado!" });
  }
  res.status(200).send(student);
});
studentsRouter.post("/", async (req: Request, res: Response) => {
  if (req.body.age < 18) {
    return res.status(400).send({
      message: "Estudante não foi adicionado, pois não tem idade mínima!",
    });
  }
  await studentsServices.create(req.body);
  res.send({ message: "Estudante adicionado" }).status(201);
});

studentsRouter.delete(
  "/remove/:document",
  async (req: Request, res: Response) => {
    try {
      await studentsServices.remove(req.params.document);
      res.status(200).send({ message: "Estudante removido com sucesso!" });
    } catch (error: any) {
      console.log("entrou");
      res.status(400).send({ message: error.message });
    }
  }
);

studentsRouter.put("/:document", async (req: Request, res: Response) => {
  try {
    await studentsServices.update(req.params.document, req.body);

    res.status(200).send({ message: "Estudante atualizado!" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

export default studentsRouter;
