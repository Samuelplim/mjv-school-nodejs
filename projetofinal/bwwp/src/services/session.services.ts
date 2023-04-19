import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import sessionRepository from "../repositories/session.repository";
import { SessionInterface } from "../interfaces";

class SessionService {
  async create(session: SessionInterface) {
    if (session.password) {
      session.password = await bcrypt.hash(session.password, 10);
    }
    sessionRepository.create(session);
  }
}
dotenv.config();

export default new SessionService();
