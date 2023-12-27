import { Card } from '../model/Card';
import { Register } from '../model/Register';
import { RegisterService } from './RegisterService';

export class PaymentService {
  constructor(private registerService: RegisterService) {}

  getPaymentInfoByCard(card: Card): void {
    const registers: Register[] = this.registerService.getRegistersByCard(card);
    const sum: number = registers.reduce(
      (partialValue, reg) => partialValue + reg.value,
      0.0
    );
    console.log(`You have to pay ${sum.toFixed(2)} until next week`);
  }
}
