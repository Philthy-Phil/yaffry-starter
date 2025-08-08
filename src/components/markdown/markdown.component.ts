import { Component, YComponent } from '@philthy-phil/yaffry';
import './markdown.component.style.css';

@YComponent({
  selector: 'markdown',
  templateUrl: './markdown.component.template.html',
  styleUrls: ['./markdown.component.style.css']
})
export class MarkDownComponent extends Component {
  onInit() {
    // console.log('MarkDownComponent onInit');
  }
  onUpdate() {
    // console.log('MarkDownComponent onUpdate');
  }
  onDestroy() {
    // console.log('MarkDownComponent onDestroy');
  }
}
