import { ATM } from './services/ATM';
import { Bank } from './services/Bank';
import { BankOperations } from './services/BankOperations';

export const bankApp = {
  main(): void {
    const bank: BankOperations = new Bank();
    bank.deposit(123, 500);
    bank.withdraw(456, '8888', 50);
    bank.withdraw(456, '9999', 50);
    bank.withdraw(123, '1234', 2000);
    bank.changePassword(123, '1111', '4321');
    bank.changePassword(123, '1234', '4321');
    bank.withdraw(123, '4321', 700);

    console.log('------------- ATM -------------');
    const atm: BankOperations = new ATM(bank);
    atm.deposit(123, 500);
    atm.withdraw(456, '8888', 50);
    atm.withdraw(456, '9999', 50);
    atm.withdraw(123, '1234', 2000);
    atm.changePassword(123, '1111', '4321');
    atm.changePassword(123, '1234', '4321');
    atm.withdraw(123, '4321', 700);
  },
};
