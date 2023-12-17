import { VGA } from '../interfaces/VGA';

export class OldMonitor implements VGA {
  setImage(image: string): void {
    console.log('>>> This is your video:', image);
  }
}
