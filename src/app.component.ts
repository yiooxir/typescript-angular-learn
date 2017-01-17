import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        <a routerLink="/contacts" routerLinkActive="active">Contacts</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styles: [`
        a { text-decoration: none; }
        a.active { font-weight: bold; }
    `]
})
export class AppComponent {
    title = 'App component';
}
