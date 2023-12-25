import { adapterApp } from './adapter/hdmitovga/client';
import { hexagonalApp } from './adapter/hexagonal/client';
import { converterApp } from './bridge/converter';
import { compositeApp } from './composite/filesystem/client';
import { decoratorApp } from './decorator/chalk/client';

adapterApp.main();
hexagonalApp.main();

converterApp.main();
compositeApp.main();
decoratorApp.main();
