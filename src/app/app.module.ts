import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUsersComponent } from './components/login-users/login-users.component';
import { AgregarEditarEliminarContactsComponent } from './components/agregar-editar-eliminar-contacts/agregar-editar-eliminar-contacts.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsViewComponent } from './components/contacts-view/contacts-view.component';
import { ContactsBlockComponent } from './components/contacts-block/contacts-block.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginUsersComponent,
    AgregarEditarEliminarContactsComponent,
    ContactsListComponent,
    ContactsViewComponent,
    ContactsBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
