export class PixelType {
  constructor(private _character: string, private _treasureReward: number) {}

  get character(): string {
    return this._character;
  }

  get treasureReward(): number {
    return this._treasureReward;
  }
}
