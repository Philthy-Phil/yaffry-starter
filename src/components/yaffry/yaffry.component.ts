import './yaffry.component.style.css';
import { Component, httpService, YComponent } from '@philthy-phil/yaffry';

@YComponent({
  selector: 'yaffry',
  templateUrl: './yaffry.component.template.html',
  styleUrls: ['./yaffry.component.style.css'],
  data: () => ({
    title: 'Hello Yaffry!',
    someApiData: []
  })
})
export class YaffryComponent extends Component {

  onInit() {
    // TODO when initialized
    this.loadSampleData();
  }

  loadSampleData = async() => {
    try {
      const data = await httpService.get('https://pokeapi.co/api/v2/pokemon');
      console.log('Some Sample Api Data:', data);
      this.data.someApiData = data;
    } catch (e) {
      console.log('Error Occurred:', e);
    }
  }

  onUpdate() {
    // TODO when updated
  }
  onDestroy() {
    // TODO when destroyed
  }
  

} 
