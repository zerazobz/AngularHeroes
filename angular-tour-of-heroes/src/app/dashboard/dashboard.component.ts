import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];

  constructor(private heroesService: HeroService) { }

  ngOnInit(): void {
  	this.getHeroes();
  }

  getHeroes(): void {
  	// this.heroesService.getHeroes().subscribe((heroes) => this.heroes = heroes);
  	this.heroesService.getHeroes().subscribe((heroes) => this.heroes = heroes.slice(1, 5));
  }
}
