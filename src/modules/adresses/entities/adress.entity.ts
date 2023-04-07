import { randomUUID } from 'node:crypto';

export class Address {
  readonly id: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  zipCope: string;

  constructor() {
    this.id = randomUUID();
  }
}
