import { Component, YComponent } from '@philthy-phil/yaffry';
import './markdown.component.style.css';

@YComponent({
  selector: 'markdown',
  templateUrl: './markdown.component.template.html',
  styleUrls: ['./markdown.component.style.css']
})
export class MarkDownComponent extends Component {
  
  onInit(): void { }
  onUpdate(): void { }
  onDestroy(): void  { }
}
