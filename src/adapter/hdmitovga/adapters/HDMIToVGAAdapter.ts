import { HDMI } from '../interfaces/HDMI';
import { VGA } from '../interfaces/VGA';

export class HDMIToVGAAdapter implements HDMI {
  constructor(private vga: VGA) {
    console.log('Connecting the HDMI/VGA adapter...');
  }

  setImage(image: string): void {
    console.log('Converting the image from HDMI to VGA');
    this.vga.setImage(image);
  }

  setSound(sound: string): void {
    console.log(`Sorry, we don't work with sound`);
  }
}
