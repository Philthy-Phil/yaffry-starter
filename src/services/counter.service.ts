import { Service, ReactiveSystem } from '@philthy-phil/yaffry';

export class CounterService extends Service {
  count: number = 0;
  increment(): void { this.count++; }
  decrement(): void { this.count--; }
}
export const counterService = ReactiveSystem.makeReactive(new CounterService());