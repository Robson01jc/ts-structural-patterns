import readline from 'readline';
import { Map } from './game/Map';

function nextLine(
  reader: readline.Interface,
  question: string
): Promise<string> {
  return new Promise((resolve) => {
    reader.question(question, (answer: string) => resolve(answer));
  });
}

function sleep(timeout: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

function print(message: string): void {
  process.stdout.write(message);
}

export const gameApp = {
  async main(): Promise<void> {
    const map: Map = new Map();
    let score: number = 0;
    let reward: number = 0;
    const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    while (!map.isGameOver()) {
      map.drawMap();
      print(`Score: ${score}\n`);
      const coord = await nextLine(reader, 'Enter a coord: ');
      reward = map.openCell(coord);
      score += reward;
      print(`You won ${reward} points on this move!\n\n`);
      sleep(1000);
    }
    print(`\n\n\n\n\n\tGame Over!\n\n\tTotal Score: ${score}\n\n\n\n\n\n`);
    reader.close();
  },
};
