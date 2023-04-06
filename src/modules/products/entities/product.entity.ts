import { randomUUID } from 'node:crypto';

export class Product {
  readonly id: string;
  name: string;
  type: string;

  constructor() {
    this.id = randomUUID();
  }
}
