import { Component } from '@angular/core';
import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent {
	title='Tour of Heroes';
	selectedHero: Hero;
	heroes: Hero[];

	constructor(private heroService: HeroService){}

	ngOnInit(): void{
		this.getHeroes();
	}

	getHeroes():void{
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero): void{
		this.selectedHero = hero;
	}
}
