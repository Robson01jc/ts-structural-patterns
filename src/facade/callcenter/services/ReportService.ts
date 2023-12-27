import { Card } from '../model/Card';
import { Register } from '../model/Register';
import { RegisterService } from './RegisterService';

export class ReportService {
  constructor(private registerService: RegisterService) {}

  getSumary(card: Card): void {
    const registers: Register[] = this.registerService.getRegistersByCard(card);
    for (const reg of registers) {
      console.log(`${reg.storeName}\t${reg.value}\t${reg.date.toString()}`);
    }
  }
}
