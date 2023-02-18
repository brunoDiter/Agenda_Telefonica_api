import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Componentes paginas*/

import { AddeditremovecontactsComponent } from './components/add-edit-remove-contacts/agregar-editar-eliminar-contacts.component';
import { ContactsBlockComponent } from './components/contacts-block/contacts-block.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsViewComponent } from './components/contacts-view/contacts-view.component';
import { LoginUsersComponent } from './components/login-users/login-users.component';

const routes: Routes = [
  { path:"", redirectTo: 'loginUsers', pathMatch : 'full'},
  { path: 'contactsList', component: ContactsListComponent},
  { path: 'addContacts', component: AddeditremovecontactsComponent },
  { path: 'loginUsers', component: LoginUsersComponent },
  { path: 'contactsView/:id', component: ContactsViewComponent },
  { path: 'editContacts/:id', component: AddeditremovecontactsComponent },
  { path: 'contactsBlock', component: ContactsBlockComponent },
  { path: '**', redirectTo: 'loginUsers', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
