import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import {RouterModule} from "@angular/router";

const routes = [
    {path: '', component: HomeComponent},
    {path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule'}
];

export default RouterModule.forRoot(routes);
