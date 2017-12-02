import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-hero';

import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material';
import { HeroService } from '../hero.service'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  dataSource = new MatTableDataSource(HEROES);
  displayedColumns = ['id', 'name'];

  // hero: Hero ={
  //   id:1,
  //   name: 'jon snow',
  // };

  //heroes= HEROES;

  selectedHero: Hero;

  heroes : Hero[];
  
  nuevo:any={};

  constructor(private heroService: HeroService) { }


  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero:Hero) : void {
    this.selectedHero = hero;   
  }

  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  addHeroes():void{
    
    console.log(this.nuevo);

    var cont=this.heroes.length;
    this.nuevo.id=cont+1;    
    this.heroes.push(this.nuevo);
    this.nuevo={};
  }


  deleteHeroes(i): void{

    console.log(i);
  
    this.heroes.splice(i,1);
  }

}
