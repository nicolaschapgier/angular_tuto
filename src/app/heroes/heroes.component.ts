import { Component } from '@angular/core';
import { Hero} from '../hero'
import { HEROES } from '../mock-heroes'; 
// import { HEROES2 } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent {

  heroes = HEROES;
  // heroes2 = HEROES2;
  selectedHero?: Hero;
  // selectedHero2?: Hero2;
  
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  // onSelect2(hero2: Hero2): void{
  //   this.selectedHero2 = hero2;
  // }
}