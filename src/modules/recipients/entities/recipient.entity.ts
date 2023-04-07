import { randomUUID } from 'node:crypto';
import { Address } from 'src/modules/adresses/entities/adress.entity';

export class Recipient {
  readonly id: string;

  name: string;
  address: Address;

  constructor() {
    this.id = randomUUID();
  }
}
