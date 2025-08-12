import { Component, YComponent } from '@philthy-phil/yaffry';

@YComponent({
  selector: 'app-root',
  templateUrl: './app.component.template.html',
  styleUrls: ['./app.component.style.css'],
})
export class AppComponent extends Component {

  onInit(): void { }
  onUpdate(): void { }
  onDestroy(): void { }

} 
