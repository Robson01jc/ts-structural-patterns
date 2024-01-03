import { Pixel } from '../model/Pixel';
import { PixelFactory } from '../model/PixelFactory';

export class Map {
  private static readonly ATTEMPTS: number = 10;
  private static readonly MAP_ROWS: number = 10;
  private static readonly MAP_COLUMNS: number = 10;

  private map: Pixel[][];
  private remainingAttempts: number;

  constructor() {
    this.map = this.createMap();
    this.remainingAttempts = Map.ATTEMPTS;
  }

  private createMap(): Pixel[][] {
    const emptyCell = new Pixel(PixelFactory.instance.getPixelType(' ', 0));

    return new Array<Array<Pixel>>(Map.MAP_ROWS)
      .fill(new Array<Pixel>(Map.MAP_COLUMNS).fill(emptyCell))
      .map((row) => {
        return row.map(() => {
          switch (this.random()) {
            case 0:
              return new Pixel(PixelFactory.instance.getPixelType('$', 100));
            case 1:
              return new Pixel(PixelFactory.instance.getPixelType('%', 50));
            case 2:
              return new Pixel(PixelFactory.instance.getPixelType('X', -50));
            case 3:
              return new Pixel(PixelFactory.instance.getPixelType('@', -100));
            default:
              return new Pixel(PixelFactory.instance.getPixelType(' ', 0));
          }
        });
      });
  }

  private random(min: number = 0, max: number = 10): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  private print(message: string): void {
    process.stdout.write(message);
  }

  drawMap(): void {
    this.print('---------------------\n');
    this.print(' ');
    for (let title = 0; title < Map.MAP_COLUMNS; title++)
      this.print(` ${title}`);
    this.map.forEach((row, idx) => {
      this.print(`\n${idx}`);
      row.forEach((cell) => {
        this.print(` ${cell.opened ? cell.type.character : '#'}`);
      });
    });
    this.print(`\nYou have ${this.remainingAttempts} trys left\n`);
  }

  openCell(coord: string): number {
    if (!/^\d+$/.test(coord) || coord.length !== 2) return 0;

    const [row, column] = coord;
    const chosen = this.map[+row][+column];

    if (chosen.opened) return 0;

    chosen.opened = true;
    this.remainingAttempts--;

    return chosen.type.treasureReward;
  }

  isGameOver(): boolean {
    return this.remainingAttempts === 0;
  }
}
