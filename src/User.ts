import crypto from "node:crypto";
import { UserAge } from "./UserAge.js";
import { UserPassword } from "./UserPassword.js";

export class User {
  private id: number;
  private name: string;
  private email: string;
  private password: UserPassword;
  private age: UserAge;

  constructor(id: number, name: string, email: string, password: string, age: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = UserPassword.fromPlain(password)
    this.age = new UserAge(age);
  }

  getId() {
    return this.id;
  }

  hasName(name: string) {
    return this.name === name
  }

  getEmail() {
    return this.email
  }

  getHashedPassword() {
    return this.password.getPassword()
  }

  getAge() {
    return this.age.age
  }
}
