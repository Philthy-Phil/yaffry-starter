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
    counterService: counterService,
  })
})
export class Democomp1Component extends Component {
  
  onInit() { }
  onUpdate() { }
  onDestroy() { }

  increment() {
    this.data.count++;
  }
  decrement() {
    this.data.count--;
  }
  addItem() {
    this.data.items.push(this.data.inputValue || 'new item');
    this.data.inputValue = '';
  }
  removeItem(index: number) {
    this.data.items = this.data.items.filter((_: any, i: number) => i !== index);
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