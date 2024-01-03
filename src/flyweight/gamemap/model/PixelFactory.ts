import { PixelType } from './PixelType';

export class PixelFactory {
  private static _instance = new PixelFactory();
  private static _pixelRepository = new Map<string, PixelType>();

  private constructor() {}

  static get instance(): PixelFactory {
    return this._instance;
  }

  getPixelType(character: string, treasureReward: number): PixelType {
    if (!PixelFactory._pixelRepository.has(character)) {
      // process.stdout.write(`Creating new Flyweight for ${character}\n`);
      PixelFactory._pixelRepository.set(
        character,
        new PixelType(character, treasureReward)
      );
    }

    return PixelFactory._pixelRepository.get(character)!;
  }
}
