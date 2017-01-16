import { Injectable } from '@angular/core';
import { Hero } from './types/Hero';
import { HEROES } from './data/heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}
