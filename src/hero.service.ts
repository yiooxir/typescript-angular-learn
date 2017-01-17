import { Injectable } from '@angular/core';
import { Hero } from './types/Hero';
import { HEROES } from './data/heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => {
                console.log(123, heroes);
                return heroes.find(hero => hero.id === id)
            });
    }
}
