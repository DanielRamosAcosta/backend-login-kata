import crypto from "node:crypto";

export class UserPassword {
  static fromPlain(plain: string): UserPassword {
    const hashed = this.getHashed(plain);

    return new UserPassword(hashed);
  }

  private static getHashed(plain: string) {
    return crypto.createHash("sha256")
      .update(plain)
      .digest("hex");
  }

  constructor(private password: string) {}

  public getPassword(): string {
    return this.password;
  }

  compare(plain: string): boolean {
    return UserPassword.getHashed(plain) === this.password;
  }
}
