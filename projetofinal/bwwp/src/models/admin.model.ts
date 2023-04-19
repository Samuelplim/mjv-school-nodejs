import mongoose, { Schema } from "mongoose";
import { SessionInterface } from "../interfaces";

export const sessionSchema = new Schema<SessionInterface>({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

export const session = mongoose.model<SessionInterface>(
  "session",
  sessionSchema
);
