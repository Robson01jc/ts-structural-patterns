import { HDMIToVGAAdapter } from './adapters/HDMIToVGAAdapter';
import { Computer } from './devices/Computer';
import { OldMonitor } from './devices/OldMonitor';
import { TV } from './devices/TV';

export const adapterApp = {
  main(): void {
    const pc = new Computer();
    const tv = new TV();
    pc.connectPort(tv);
    pc.sendImageAndSound('Cat and rainbow', 'Nyan cat song');

    const pc2 = new Computer();
    const monitor = new OldMonitor();
    // pc2.connectPort(monitor);
    pc2.connectPort(new HDMIToVGAAdapter(monitor));
    pc.sendImageAndSound('Cat and rainbow', 'Nyan cat song');
  },
};
