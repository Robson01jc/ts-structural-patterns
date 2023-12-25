import { PlainText } from './model/PlainText';
import { Text } from './model/Text';
import { BoldText } from './model/decorators/BoldText';
import { ColoredText } from './model/decorators/ColoredText';
import { ItalicText } from './model/decorators/ItalicText';
import { StrikethroughText } from './model/decorators/StrikethroughText';
import { UnderlineText } from './model/decorators/UnderlineText';

function log(text: Text): void {
  console.log(text.get());
}

export const decoratorApp = {
  main(): void {
    const text: Text = new PlainText('some dummy text...');

    log(text);
    log(new BoldText(text));
    log(new ItalicText(text));
    log(new StrikethroughText(text));
    log(new UnderlineText(text));
    log(new ColoredText(new BoldText(text), 'red'));
    log(new ItalicText(new ColoredText(text, 'green')));
  },
};
