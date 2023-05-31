import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import sessionRepository from "../repositories/session.repository";
import { SessionInterface } from "../interfaces";

dotenv.config();

const secretJWP = process.env.JWT_SECRET_KEY || "";

class SessionService {
  async create(session: SessionInterface) {
    if (session.password) {
      session.password = await bcrypt.hash(session.password, 10);
    }
    sessionRepository.create(session);
  }
  async authorizarion(email: string, password: string) {
    const session = await sessionRepository.getByEmail(email);
    if (!session) throw new Error("Usuario não encontrado!");
    const result = await bcrypt.compare(password, session.password);
  }
}

export default new SessionService();
