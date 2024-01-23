import { BankOperations } from './BankOperations';

export class ATM implements BankOperations {
  constructor(private bank: BankOperations) {}

  deposit(account: number, amount: number): void {
    console.log('ATM proxy sending request to bank');
    this.bank.deposit(account, amount);
  }

  withdraw(account: number, passwd: string, amount: number): void {
    if (amount > 300) {
      console.log('You may not withdraw amounts over 300 here');
      return;
    }
    console.log('ATM proxy sending request to bank');
    this.bank.withdraw(account, passwd, amount);
  }

  changePassword(
    account: number,
    oldPassword: string,
    newPassword: string
  ): void {
    console.log('You must go to the bank to perform this operation');
    return;
  }
}
