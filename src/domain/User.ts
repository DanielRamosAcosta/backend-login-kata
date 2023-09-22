import crypto from "node:crypto";
import { UserAge } from "./UserAge.js";
import { UserPassword } from "./UserPassword.js";
import { UserEmail } from "./UserEmail.js";

export class User {
  private id: number;
  private name: string;
  private email: UserEmail;
  private password: UserPassword;
  private age: UserAge;

  constructor(id: number, name: string, email: string, password: string, age: number) {
    this.id = id;
    this.name = name;
    this.email = new UserEmail(email);
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
    return this.email.getEmail()
  }

  getHashedPassword() {
    return this.password.getPassword()
  }

  getAge() {
    return this.age.age
  }
}
