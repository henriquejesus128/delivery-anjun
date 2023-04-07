import { randomUUID } from 'node:crypto';

export class Recipient {
  readonly id: string;

  name: string;
  adressId: string;

  constructor() {
    this.id = randomUUID();
  }
}
