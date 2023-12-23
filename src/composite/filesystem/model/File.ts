import { FileSystemItem } from './FileSystemItem';

export class File implements FileSystemItem {
  constructor(public name: string) {}

  print(level: number, structure: string, lastChild: boolean): void {
    if (level === 0) return console.log(this.name);
    const prefix = lastChild ? '└── ' : '├── ';
    console.log(`${structure}${prefix}${this.name}`);
  }
}
