import { SessionInterface } from "../interfaces";
import { Session } from "../models/session.model";

class SessionRepository {
  create(session: SessionInterface) {
    return Session.create(session);
  }
  getByEmail(email: string) {
    return Session.findOne({ email });
  }
  update(email: string, session: Partial<SessionInterface>) {
    return Session.updateOne({ email }, { $set: session });
  }
  remove(email: string) {
    return Session.deleteOne({ email });
  }
}

export default new SessionRepository();
