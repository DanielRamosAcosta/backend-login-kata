import { describe, expect, it } from "vitest";
import { User } from "./User.js";

describe("User", () => {
  it("has an id", () => {
    const id = 1;
    const user = new User(id, "notImportant", "notImportant", "notImportant", 18)

    const userId = user.getId();

    expect(userId).equal(id)
  })

  it ("has a name", () => {
    const name = "John";
    const user = new User(1, name, "notImportant", "notImportant", 18);

    const result = user.hasName(name);

    expect(result).toBeTruthy()
  })

  it ("has an email", () => {
    const email = "jhon@gmail.com";
    const user = new User(1, "notImportant", email, "notImportant", 18);

    const userEmail = user.getEmail();

    expect(userEmail).equal(email);
  })

  it ("has a password", () => {
    const password = "123456";
    const user = new User(1, "notImportant", "jhon@gmail.com", password, 18);

    const hashedPassword = user.getHashedPassword();

    expect(hashedPassword).equal("8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92");
  })

  it ("has an age", () => {
    const age = 18;
    const user = new User(1, "notImportant", "jhon@gmail.com", "notImportant", age);

    const userAge = user.getAge();

    expect(userAge).equal(age);
  })

  it ("fails if age is under 18", () => {
    const age = 17;

    expect(() => new User(1, "notImportant", "jhon@gmail.com", "notImportant", age)).toThrow("User is not an adult");
  })
})
