import { Card } from '../model/Card';
import { Register } from '../model/Register';

export class RegisterService {
  private memory: Map<number, Register[]>;

  constructor() {
    this.memory = new Map<number, Register[]>();
    this.memory.set(11223344, [
      new Register('McDonalds', 15.0, new Date()),
      new Register('Pizza Hut', 25.0, new Date()),
      new Register('Nike Store', 50.0, new Date()),
    ]);
  }

  getRegistersByCard(card: Card): Register[] {
    return this.memory.get(card.cardNumber)!;
  }

  removeByIndex(card: Card, i: number): void {
    const list: Register[] = this.memory.get(card.cardNumber)!;
    const [reg] = list.splice(i, 1);
    console.log(`${JSON.stringify(reg)} Deleted!`);
    this.memory.set(card.cardNumber, list);
  }

  deleteCardRegistries(card: Card): void {
    this.memory.delete(card.cardNumber);
  }

  addCardRegisters(card: Card, registers: Register[]): void {
    console.log('Associating pending Registers to new Card!');
    this.memory.set(card.cardNumber, registers);
  }
}
