import { Resource } from './Resource';
import { ResourceImpl } from './ResourceImpl';

export class ResourceProxy implements Resource {
  private realResource: Resource | null = null;
  private validToken: string = 'v@lid!';

  constructor(private tokenProvided: string) {}

  getData(): string {
    if (this.tokenProvided !== this.validToken) return 'Invalid Token';
    if (!this.realResource) {
      try {
        this.realResource = new ResourceImpl();
      } catch (err) {
        console.error(err);
      }
    }

    return this.realResource?.getData() ?? '';
  }
}
