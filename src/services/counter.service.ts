import { Service, ReactiveSystem } from '@philthy-phil/yaffry';

export class CounterService extends Service {
  count = 0;
  increment() { this.count++; }
  decrement() { this.count--; }
}
export const counterService = ReactiveSystem.makeReactive(new CounterService());