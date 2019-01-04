import { Component, OnInit, OnDestroy } from '@angular/core';
import { dbModel } from '../clases/db-model';
import { Router } from '@angular/router';
import { DatabasesService } from '../services/databases.service';

@Component({
  selector: 'app-db-list',
  templateUrl: './db-list.component.html',
  styleUrls: ['./db-list.component.css']
})
export class DbListComponent implements OnInit {
  public dbslocal: Array<dbModel> = [];

  constructor(private enrutador: Router, private servicioDatos: DatabasesService) {
    this.dbslocal = [];
    this.loadDatabases();
  }
  ngOnInit() {
  }
  listDatabases(db: string) {
    //this.enrutador.navigate(['db-schema-list', db]);
    this.enrutador.navigate(['db-table-list', db]);
  }
  loadDatabases() {
    this.dbslocal = this.servicioDatos.loadDatabases();
    console.log(this.dbslocal);
  }
}
