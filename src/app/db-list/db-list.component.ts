import { Component, OnInit } from '@angular/core';
import { dbModel } from '../clases/db-model';

@Component({
  selector: 'app-db-list',
  templateUrl: './db-list.component.html',
  styleUrls: ['./db-list.component.css']
})
export class DbListComponent implements OnInit {

  private db1: dbModel;
  private db2: dbModel;
  private db3: dbModel;

  constructor() { }

  ngOnInit() {
  }

  loadSchemas() {
    this.db1 = new dbModel("DB Principal", ["schema transactional", "schema repository"]);
    this.db2 = new dbModel("DB Control", ["schema control"]);
    this.db3 = new dbModel("DB Seguridad", ["schema security"]);
  }
}
