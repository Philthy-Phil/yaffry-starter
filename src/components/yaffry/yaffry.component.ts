import './yaffry.component.style.css';
import { Component, YComponent } from '@philthy-phil/yaffry';

@YComponent({
  selector: 'yaffry',
  templateUrl: './yaffry.component.template.html',
  styleUrls: ['./yaffry.component.style.css'],
  data: () => ({
    title: 'Hello Yaffry!'
  })
})
export class YaffryComponent extends Component {

  onInit() {
    // TODO when initialized
  }

  onUpdate() {
    // TODO when updated
  }
  onDestroy() {
    // TODO when destroyed
  }
  

} 
