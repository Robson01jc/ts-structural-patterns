import { Card } from '../model/Card';
import { Register } from '../model/Register';
import { CardService } from './CardService';
import { RegisterService } from './RegisterService';

export class SecurityService {
  constructor(
    private cardService: CardService,
    private registerService: RegisterService
  ) {}

  public blockCard(card: Card): Register[] {
    console.log(`Blocking card: ${JSON.stringify(card)}`);
    const pendingRegistries: Register[] =
      this.registerService.getRegistersByCard(card);
    this.cardService.removeCard(card);
    this.registerService.deleteCardRegistries(card);

    return pendingRegistries;
  }
}
