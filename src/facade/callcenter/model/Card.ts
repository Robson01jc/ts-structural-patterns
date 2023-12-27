export class Card {
  constructor(private _userNumber: number, private _cardNumber: number) {}

  public get userNumber(): number {
    return this._userNumber;
  }

  public get cardNumber(): number {
    return this._cardNumber;
  }
}
