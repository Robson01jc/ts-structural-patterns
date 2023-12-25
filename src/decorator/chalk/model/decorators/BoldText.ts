import chalk from 'chalk';
import { Text } from '../Text';
import { TextDecorator } from './TextDecorator';

export class BoldText implements TextDecorator {
  constructor(public text: Text) {}

  get(): string {
    return chalk.bold(this.text.get());
  }
}
