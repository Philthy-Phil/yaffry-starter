import { Component, httpService, YComponent } from '@philthy-phil/yaffry';
import { counterService } from '../../services/counter.service';
import './democomp2.component.style.css';

@YComponent({
  selector: 'democomp2',
  templateUrl: './democomp2.component.template.html',
  styleUrls: ['./democomp2.component.style.css'],
  data: () => ({
    someApiData: null,
    pokemonName: null,
    pokemonImage: null,
    counterService
  })
})
export class Democomp2Component extends Component {
  onInit() {
    console.log('Democomp2Component onInit');
    this.loadSampleData();
  }

  loadSampleData = async() => {
    try {
      const randomId = Math.floor(Math.random() * 1025) + 1;
      const data = await httpService.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      console.log('Random Pokemon:', data);
      this.data.someApiData = data;
      this.data.pokemonName = data.name;
      this.data.pokemonImage = data.sprites.front_default;
    } catch (e) {
      console.log('Error Occurred:', e);
      this.data.someApiData = null;
      this.data.pokemonName = null;
      this.data.pokemonImage = null;
    }
  }

  onUpdate() { }
  onDestroy() { }
  
  useServiceInc() {
    counterService.increment();
  }
  useServiceDec() {
    counterService.decrement();
  }
}