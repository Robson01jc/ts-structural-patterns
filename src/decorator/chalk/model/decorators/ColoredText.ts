import chalk from 'chalk';
import { Text } from '../Text';
import { TextDecorator } from './TextDecorator';

type Color =
  | 'black'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'magenta'
  | 'cyan'
  | 'white'
  | 'gray'
  | 'grey'
  | 'blackBright'
  | 'redBright'
  | 'greenBright'
  | 'yellowBright'
  | 'blueBright'
  | 'magentaBright'
  | 'cyanBright'
  | 'whiteBright';

export class ColoredText implements TextDecorator {
  constructor(public text: Text, private color: Color) {}

  get(): string {
    return chalk[this.color](this.text.get());
  }
}
