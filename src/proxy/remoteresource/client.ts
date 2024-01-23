import readline from 'readline';
import { Resource } from './services/Resource';
import { ResourceImpl } from './services/ResourceImpl';
import { ResourceProxy } from './services/ResourceProxy';

function nextLine(
  reader: readline.Interface,
  question: string
): Promise<string> {
  return new Promise((resolve) => {
    reader.question(question, (answer: string) => resolve(answer));
  });
}

function print(message: string): void {
  process.stdout.write(message);
}

function println(message: string): void {
  print(`${message}\n`);
}

export const remoteResourceApp = {
  async main(): Promise<void> {
    // const resource: Resource = new ResourceProxy('v@lid!');
    // const resource: Resource = new ResourceProxy('Inv@lid!');
    const resource: Resource = new ResourceImpl();

    const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let exit: boolean = false;
    while (true) {
      println(
        `These are your options:\n\t1-Current date\n\t...Other Options\n\t9-Get Resource's data\n\t0-Exit`
      );
      const option: string = await nextLine(reader, 'What do you want? ');
      println('\n\n');
      switch (option) {
        case '1':
          println(new Date().toLocaleDateString());
          break;
        case '9':
          println(resource.getData());
          break;
        case '0':
          exit = true;
          break;
        default:
          println('Processing other options');
          break;
      }
      println('\n\n');
      if (exit) break;
    }
    println('Bye!');
  },
};
