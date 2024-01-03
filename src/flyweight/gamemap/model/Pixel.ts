import { PixelType } from './PixelType';

export class Pixel {
  constructor(private _type: PixelType, private _opened: boolean = false) {}

  get type(): PixelType {
    return this._type;
  }

  get opened(): boolean {
    return this._opened;
  }

  set opened(opened: boolean) {
    this._opened = opened;
  }
}
