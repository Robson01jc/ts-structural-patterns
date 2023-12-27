import { Card } from '../model/Card';
import { Register } from '../model/Register';
import { CardService } from '../services/CardService';
import { PaymentService } from '../services/PaymentService';
import { RegisterService } from '../services/RegisterService';
import { ReportService } from '../services/ReportService';
import { SecurityService } from '../services/SecurityService';

export class CallCenterFacade {
  private cardService: CardService;
  private registerService: RegisterService;
  private reportService: ReportService;
  private paymentService: PaymentService;
  private securityService: SecurityService;

  constructor() {
    this.cardService = new CardService();
    this.registerService = new RegisterService();
    this.reportService = new ReportService(this.registerService);
    this.paymentService = new PaymentService(this.registerService);
    this.securityService = new SecurityService(
      this.cardService,
      this.registerService
    );
  }

  getCardByUser(l: number): Card {
    return this.cardService.getCardByUser(l);
  }

  getSumary(card: Card): void {
    this.reportService.getSumary(card);
  }

  getPaymentInfoByCard(card: Card): void {
    this.paymentService.getPaymentInfoByCard(card);
  }

  cancelLastRegister(card: Card): void {
    const registers: Register[] = this.registerService.getRegistersByCard(card);
    this.registerService.removeByIndex(card, registers.length - 1);
    const pendingRegisters: Register[] = this.securityService.blockCard(card);
    const newCard: Card = this.cardService.createNewCard(123456, 33445566);
    this.registerService.addCardRegisters(newCard, pendingRegisters);
    this.reportService.getSumary(newCard);
  }
}
