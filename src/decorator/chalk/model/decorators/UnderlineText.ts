import chalk from 'chalk';
import { Text } from '../Text';
import { TextDecorator } from './TextDecorator';

export class UnderlineText implements TextDecorator {
  constructor(public text: Text) {}

  get(): string {
    return chalk.underline(this.text.get());
  }
}
