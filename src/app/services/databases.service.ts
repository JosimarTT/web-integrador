import { Injectable } from '@angular/core';
import { dbModel } from '../clases/db-model';

@Injectable({
  providedIn: 'root'
})
export class DatabasesService {
  private dbs: Array<dbModel> = [];
  private db: dbModel;

  constructor() {
    this.fillDatabases();
  }

  loadDatabases(): Array<dbModel> {
    return this.dbs;
  }

  fillDatabases() {
    this.db = new dbModel("DB Principal", 'assets/img/db_principal.png');
    this.dbs.push(this.db);
    this.db = new dbModel("DB Control", 'assets/img/db_control.png');
    this.dbs.push(this.db);
    this.db = new dbModel("DB Seguridad", 'assets/img/db_seguridad.png');
    this.dbs.push(this.db);
  }
}
