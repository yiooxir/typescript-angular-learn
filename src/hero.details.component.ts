import { Hero } from './types/Hero';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-hero-detail',
    template: `
    <div *ngIf="!!hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
      <h2>My Heroes</h2>
    </div>
    `
})
export class HeroDetailComponent {
    @Input()
    hero: Hero[];
}
