import { User } from "./User.js";

export class UserRepository {
  save(user: User) {
    throw new Error("This is an interface. Cannot save");
  }
}
