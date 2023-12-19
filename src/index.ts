import { adapterApp } from './adapter/hdmitovga/client';
import { hexagonalApp } from './adapter/hexagonal/client';
import { converterApp } from './bridge/converter';

adapterApp.main();
hexagonalApp.main();

converterApp.main();
