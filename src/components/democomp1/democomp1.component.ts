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
  
  onInit(): void { }
  onUpdate(): void { }
  onDestroy(): void { }

  increment(): void {
    this.data.count++;
  }

  decrement(): void {
    this.data.count--;
  }

  addItem(): void {
    this.data.items.push(this.data.inputValue || 'neu');
    this.data.inputValue = '';
  }

  removeItem(index: number): void {   
    const newItems = [...this.data.items];
    newItems.splice(index, 1);
    this.data.items = newItems;  
  }

  toggleShow(): void {
    this.data.show = !this.data.show;
  }

  useServiceInc(): void {
    counterService.increment();
  }
  
  useServiceDec(): void {
    counterService.decrement();
  }
}