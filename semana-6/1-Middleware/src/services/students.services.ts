import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import studentRepository from "../repositories/student.repository";
import { StudentInterface } from "../interface";

dotenv.config();

const secretJWT = process.env.JWT_SECRET_KEY || "";

class StudentsService {
  getAll() {
    return studentRepository.getAll();
  }

  getByDocument(document: string) {
    return studentRepository.getByDocument(document);
  }

  async create(student: StudentInterface) {
    if (student.password) {
      student.password = await bcrypt.hash(student.password.toString(), 10);
    }
    return studentRepository.create(student);
  }

  async authorizarion(document: string, password: string) {
    const student = await studentRepository.getByDocument(document);
    if (!student) throw new Error("Estudante não encontrado!");

    const result = await bcrypt.compare(password, student.password.toString());
    if (result) {
      return jwt.sign(
        {
          document: student.document,
          id: student._id,
        },
        secretJWT,
        {
          expiresIn: "1h",
        }
      );
    }

    throw new Error("Falha na autenticação");
  }

  async remove(document: string) {
    return studentRepository.remove(document);
  }

  update(document: string, student: Partial<StudentInterface>) {
    return studentRepository.update(document, student);
  }
}

export default new StudentsService();
