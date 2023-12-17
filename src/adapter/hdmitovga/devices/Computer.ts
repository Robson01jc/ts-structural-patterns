import { HDMI } from '../interfaces/HDMI';

export class Computer {
  private port?: HDMI;

  connectPort(screen: HDMI): void {
    console.log('Connecting on HDMI port...');
    this.port = screen;
  }

  sendImageAndSound(image: string, sound: string): void {
    if (!this.port) {
      console.log('Connect a HDMI cable first');
      return;
    }

    this.port.setImage(image);
    this.port.setSound(sound);
  }
}
