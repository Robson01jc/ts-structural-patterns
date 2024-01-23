import { User } from '../model/User';
import { BankOperations } from './BankOperations';

export class Bank implements BankOperations {
  private userDatabase: Map<number, User>;

  constructor() {
    this.userDatabase = new Map<number, User>();
    this.userDatabase.set(123, new User('User #1', 123, '1234', 1000));
    this.userDatabase.set(456, new User('User #2', 456, '9999', 200));
  }

  deposit(account: number, amount: number): void {
    const user = this.userDatabase.get(account);
    if (!user) {
      console.log('Invalid account');
      return;
    }
    user.balance = user.balance + amount;
    console.log(`${user.name} +${amount}. New Balance: ${user.balance}`);
  }

  withdraw(account: number, passwd: string, amount: number): void {
    const user = this.userDatabase.get(account);
    if (!user) {
      console.log('Invalid account');
      return;
    }
    if (user.password !== passwd) {
      console.log('Wrong password');
      return;
    }
    if (user.balance < amount) {
      console.log("You don't have enough resources");
      return;
    }
    user.balance = user.balance - amount;
    console.log(`${user.name} -${amount}. New Balance: ${user.balance}`);
  }

  changePassword(
    account: number,
    oldPassword: string,
    newPassword: string
  ): void {
    const user = this.userDatabase.get(account);
    if (!user) {
      console.log('Invalid account');
      return;
    }
    if (user.password !== oldPassword) {
      console.log('Wrong password');
      return;
    }
    user.password = newPassword;
    console.log(`${user.name}'s password updated successfuly!`);
  }
}
