import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DbListComponent } from './db-list/db-list.component';
import { DbTableListComponent } from './db-table-list/db-table-list.component';
import { TableDescriptionComponent } from './table-description/table-description.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DbListComponent,
    DbTableListComponent,
    TableDescriptionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }