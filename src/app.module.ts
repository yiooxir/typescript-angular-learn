import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';

import {AppComponent}         from './app.component';
import { HomeComponent } from './home/home.component';
// import { ContactsComponent } from './contacts/contacts.component';

import appRoutes from './app.routes';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
    imports: [
        BrowserModule,
        appRoutes,
        // FormsModule,
        // AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        // ContactsComponent,
        // DashboardComponent,
        // HeroDetailComponent,
        // HeroesComponent
    ],
    // providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {
}