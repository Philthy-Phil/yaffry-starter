import { Component, YComponent } from '@philthy-phil/yaffry';
import { counterService } from '../../services/counter.service';
import './democomp2.component.style.css';

@YComponent({
  selector: 'democomp2',
  templateUrl: './democomp2.component.template.html',
  styleUrls: ['./democomp2.component.style.css'],
  data: () => ({
    counterService
  })
})
export class Democomp2Component extends Component {
  onInit() {
    console.log('Democomp2Component onInit');
  }
  onUpdate() {
    console.log('Democomp2Component onUpdate');
  }
  onDestroy() {
    console.log('Democomp2Component onDestroy');
  }
  useServiceInc() {
    counterService.increment();
  }
  useServiceDec() {
    counterService.decrement();
  }
}