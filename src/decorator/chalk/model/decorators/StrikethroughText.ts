import chalk from 'chalk';
import { Text } from '../Text';
import { TextDecorator } from './TextDecorator';

export class StrikethroughText implements TextDecorator {
  constructor(public text: Text) {}

  get(): string {
    return chalk.strikethrough(this.text.get());
  }
}
