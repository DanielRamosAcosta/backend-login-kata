import { User } from "../domain/User.js";
import { UserRepository } from "../domain/UserRepository.js";
import { IdGenerator } from "../domain/IdGenerator.js";

export class RegisterUser {
  private userRepository: UserRepository;
  private idGenerator: IdGenerator;

  constructor(userRepository: UserRepository, idGenerator: IdGenerator) {
    this.userRepository = userRepository;
    this.idGenerator = idGenerator;
  }

  execute(name: string, email: string, password: string, age: number) {
    const user = new User(this.idGenerator.generate(), name, email, password, age);

    this.userRepository.save(user)
  }
}
