import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DbListComponent } from './db-list/db-list.component';
import { DbTableListComponent } from './db-table-list/db-table-list.component';
import { TableDescriptionComponent } from './table-description/table-description.component';
import { DbImgComponent } from './db-img/db-img.component';

const rutas: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'db-list',
    component: DbListComponent
  },
  {
    path: 'db-img',
    component: DbImgComponent
  },
  {
    path: 'db-table-list/:db',
    component: DbTableListComponent
  },
  {
    path: 'table-description/:table',
    component: TableDescriptionComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class RutasModule { }
