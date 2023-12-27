export class Register {
  constructor(
    private _storeName: string,
    private _value: number,
    private _date: Date
  ) {}

  get storeName(): string {
    return this._storeName;
  }

  get value(): number {
    return this._value;
  }

  get date(): Date {
    return this._date;
  }
}
