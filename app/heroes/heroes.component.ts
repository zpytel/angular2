import {Component,OnInit} from '@angular/core';
import {HeroService} from '../service/heroes.service';
import {Hero} from '../hero';

@Component({
  moduleId:module.id,
  templateUrl:'heroes.component.html',
  providers:[HeroService]

})
export class HeroesComponent implements OnInit{
  heroes:Hero[]; 
  error:any;

  constructor(private heroService:HeroService){}

  ngOnInit(){
   this.getHeroes()
  }
  getHeroes(){
    this.heroService.getHeroes()
    .then(heroes=>this.heroes=heroes)
    .catch(error=>this.error=error)
  }
}