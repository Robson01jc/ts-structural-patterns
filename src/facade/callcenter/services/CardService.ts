import { Card } from '../model/Card';

export class CardService {
  private memory: Map<number, Card>;

  constructor() {
    this.memory = new Map<number, Card>();
    this.memory.set(123456, new Card(123456, 11223344));
  }

  getCardByUser(l: number): Card {
    return this.memory.get(l)!;
  }

  removeCard(card: Card): void {
    this.memory.delete(card.userNumber);
  }

  createNewCard(user: number, cardNumber: number): Card {
    const newCard: Card = new Card(user, cardNumber);
    this.memory.set(user, newCard);
    console.log(`Creating the new card: ${JSON.stringify(newCard)}`);

    return newCard;
  }
}
