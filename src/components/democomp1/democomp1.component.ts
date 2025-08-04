import { Component, YComponent } from '@philthy-phil/yaffry';
import { counterService } from '../../services/counter.service';
import './democomp1.component.style.css';

@YComponent({
  selector: 'democomp1',
  templateUrl: './democomp1.component.template.html',
  styleUrls: ['./democomp1.component.style.css'],
  data: () => ({
    count: 0,
    inputValue: '',
    items: ['eins', 'zwei', 'drei'],
    show: true,
    counterService
  })
})
export class Democomp1Component extends Component {
  onInit() {
    // console.log('Democomp1Component onInit');
  }
  onUpdate() {
    // console.log('Democomp1Component onUpdate');
  }
  onDestroy() {
    // console.log('Democomp1Component onDestroy');
  }
  increment() {
    this.data.count++;
  }
  decrement() {
    this.data.count--;
  }
  addItem() {
    this.data.items.push(this.data.inputValue || 'neu');
    this.data.inputValue = '';
  }
  removeItem(index: number) {
    // console.log('Removing item at index:', index);
    this.data.items.splice(index, 1);
  }
  toggleShow() {
    this.data.show = !this.data.show;
  }
  useServiceInc() {
    counterService.increment();
  }
  useServiceDec() {
    counterService.decrement();
  }
}