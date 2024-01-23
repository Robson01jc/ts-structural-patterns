import { Resource } from './Resource';

function sleep(seconds: number) {
  const nSecondsAfter = new Date().getTime() + seconds * 1000;
  while (new Date().getTime() <= nSecondsAfter) {}
}

export class ResourceImpl implements Resource {
  private data: string;

  constructor() {
    process.stdout.write('Loading resources from data structure\n');
    for (let i = 5; i > 0; i--) {
      sleep(1);
      process.stdout.write('.');
    }
    this.data = 'This is all your data =)';
    process.stdout.write('Resource is ready!\n');
  }

  getData(): string {
    return this.data;
  }
}
