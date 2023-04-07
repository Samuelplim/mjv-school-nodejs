import { Student } from "../models/student.model";
class StudentsService {
  students: Array<Student> = [
    {
      name: "Samuel Araujo",
      email: "samuel@gmail.com",
      document: "30589362062",
      password: "123456",
      age: 22,
      phone: "95991454545",
    },
    {
      name: "Sara Araujo",
      email: "sara.araujo@gmail.com",
      document: "30589362062",
      password: "123456",
      age: 20,
    },
    {
      name: "Moda Paula",
      email: "moda@gmail.com",
      document: "1234567890",
      password: "123456",
      age: 24,
    },
    {
      name: "meta facebook",
      email: "meta@meta.com",
      document: "1234567890",
      password: "123456",
      age: 25,
    },
  ];

  getAll() {
    return this.students;
  }

  getByDocument(document: string) {
    const student = this.students.find((std) => std.document === document);
    return student;
  }

  create(student: Student) {
    this.students.push(student);
  }

  remove(document: string) {
    const studentIndex = this.students.findIndex(
      (student) => student.document === document
    );
    if (studentIndex === -1) {
      throw new Error("Estudante não encontrado!");
    }
    this.students.splice(studentIndex, 1);
  }

  update(document: string, student: Student) {
    const studentIndex = this.students.findIndex(
      (student) => student.document === document
    );
    if (studentIndex === -1) throw new Error("Estudante não encontrado!");

    this.students[studentIndex] = student;
  }
}

export default new StudentsService();
