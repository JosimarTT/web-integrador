import { Component, OnInit } from '@angular/core';
import { schemaModel } from '../clases/schema-model';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TablesService } from '../services/tables.service';

@Component({
  selector: 'app-db-table-list',
  templateUrl: './db-table-list.component.html',
  styleUrls: ['./db-table-list.component.css']
})
export class DbTableListComponent implements OnInit {
  private databaseName: string;
  public tableName: string[];

  constructor(private enrutador: Router, private location: Location, private active: ActivatedRoute, private servicioDatos: TablesService) {
    this.tableName = [];

    this.active.params.subscribe(
      (params) => {
        this.databaseName = params.db;
      }
    )

    this.loadTables(this.databaseName);
  }

  ngOnInit() {
  }

  loadTables(db: string) {
    this.tableName = this.servicioDatos.loadTables(db);
    console.log(this.tableName);
  }
  listTables(table: string) {
    this.enrutador.navigate(['table-description', table]);
  }
  funReturn() {
    this.location.back();

  }
}
