import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUsersComponent } from './components/login-users/login-users.component';
import { AddeditremovecontactsComponent } from './components/add-edit-remove-contacts/agregar-editar-eliminar-contacts.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsViewComponent } from './components/contacts-view/contacts-view.component';
import { ContactsBlockComponent } from './components/contacts-block/contacts-block.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Angular material components */
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [
    AppComponent,
    LoginUsersComponent,
    AddeditremovecontactsComponent,
    ContactsListComponent,
    ContactsViewComponent,
    ContactsBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
