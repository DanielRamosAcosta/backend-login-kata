export class UserEmail {
  public email: string;
  constructor(email: string) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }
}
