export class UserAge {
  public age: number;
  constructor(age: number) {
    this.age = age;
    this.ensureIsAdult();
  }

  private ensureIsAdult() {
    if (this.age < 18) {
      throw new Error("User is not an adult");
    }
  }
}
