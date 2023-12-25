import { Text } from './Text';

export class PlainText implements Text {
  constructor(private text: string) {}

  get(): string {
    return this.text;
  }
}
