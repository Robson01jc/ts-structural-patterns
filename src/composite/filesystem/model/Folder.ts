import { File } from './File';
import { FileSystemItem } from './FileSystemItem';

export class Folder extends File implements FileSystemItem {
  constructor(public name: string, public children: FileSystemItem[]) {
    super(name);
  }

  print(level: number, structure: string, lastChild: boolean): void {
    super.print(level, structure, lastChild);
    this.children.forEach((child, idx, arr) => {
      let prefix = '';
      if (level > 0) prefix = lastChild ? '    ' : '│   ';
      child.print(level + 1, `${structure}${prefix}`, idx === arr.length - 1);
    });
  }
}
