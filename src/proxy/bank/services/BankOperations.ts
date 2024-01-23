export interface BankOperations {
  deposit(account: number, amount: number): void;
  withdraw(account: number, passwd: string, amount: number): void;
  changePassword(
    account: number,
    oldPassword: string,
    newPassword: string
  ): void;
}
