import { Employee } from './Employee';

export class ITGuy implements Employee {
  constructor(public name: string, public age: number, public salary: number) {}
}
