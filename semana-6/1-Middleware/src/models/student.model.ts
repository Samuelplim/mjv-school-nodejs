import mongoose, { Schema } from "mongoose";
import { StudentInterface } from "../interface";

export const studentSchema = new Schema<StudentInterface>({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  document: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  phone: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const Student = mongoose.model<StudentInterface>(
  "Student",
  studentSchema
);
