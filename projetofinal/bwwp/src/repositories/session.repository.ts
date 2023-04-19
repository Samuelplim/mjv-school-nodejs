import { SessionInterface } from "../interfaces";
import { Session } from "../models/session.model";

class SessionRepository {
  create(session: SessionInterface) {
    return Session.create(session);
  }
}

export default new SessionRepository();
