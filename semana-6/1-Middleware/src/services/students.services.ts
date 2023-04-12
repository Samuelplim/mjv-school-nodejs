import bcrypt from "bcrypt";
import studentRepository from "../repositories/student.repository";
import { StudentInterface } from "../interface";

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

  remove(document: string) {
    return studentRepository.remove(document);
  }

  update(document: string, student: Partial<StudentInterface>) {
    return studentRepository.update(document, student);
  }
}

export default new StudentsService();
