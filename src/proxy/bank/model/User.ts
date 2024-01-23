export class User {
  constructor(
    public name: string,
    public accountNumber: number,
    public password: string,
    public balance: number
  ) {}

  toString(): string {
    return `User [name=${this.name}, accountNumber=${this.accountNumber}, password=${this.password}, balance=${this.balance}]`;
  }
}
