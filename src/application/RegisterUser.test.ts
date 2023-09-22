import { describe, expect, it, vi } from "vitest";
import { User } from "../domain/User.js";
import { RegisterUser } from "./RegisterUser.js";
import { UserRepository } from "../domain/UserRepository.js";
import { IdGenerator } from "../domain/IdGenerator.js";

class UserRepositoryMock extends UserRepository {
  save(user: User) {}
}

class IdGeneratorMock extends IdGenerator {
  generate() {
    return 2;
  }
}

describe("RegisterUser", () => {
  it("saves the user in the repository", () => {
    const userRepository: UserRepository = new UserRepositoryMock();
    vi.spyOn(userRepository, "save");
    const registerUser = new RegisterUser(userRepository, new IdGeneratorMock());

    registerUser.execute("name", "email", "password", 18)

    expect(userRepository.save).toHaveBeenCalled()
  })

  it("saves the user with all the data", () => {
    const userRepository: UserRepository = new UserRepositoryMock();
    vi.spyOn(userRepository, "save");
    const registerUser = new RegisterUser(userRepository, new IdGeneratorMock());
    const id = 2;
    const name = "Maria";
    const email = "maria@example.com";
    const password = "7891234";
    const age = 19;
    const user = new User(id, name, email, password, age);

    registerUser.execute(name, email, password, age)

    expect(userRepository.save).toHaveBeenCalledWith(user)
  })
})
