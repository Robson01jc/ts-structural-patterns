import chalk from 'chalk';
import { Text } from '../Text';
import { TextDecorator } from './TextDecorator';

export class ItalicText implements TextDecorator {
  constructor(public text: Text) {}

  get(): string {
    return chalk.italic(this.text.get());
  }
}
