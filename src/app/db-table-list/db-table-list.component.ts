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
  public databaseName: string;
  public tableName: string[];
  public img: string;

  constructor(private enrutador: Router, private location: Location, private active: ActivatedRoute, private servicioDatos: TablesService) {
    this.tableName = [];

    this.active.params.subscribe(
      (params) => {
        this.databaseName = params.db;
      }
    )

    this.loadTables(this.databaseName);
    this.loadImg(this.databaseName);
  }

  ngOnInit() {
  }

  loadTables(db: string) {
    this.tableName = this.servicioDatos.loadTables(db);
    //     
    //  funcion para pasar todo a mayusculas
    //
    this.tableName.forEach((item, index) => {
      this.tableName[index] = this.tableName[index].toUpperCase();
    });
  }

  loadImg(db: string) {
    this.img = this.servicioDatos.loadImg(db);
  }

  listTables(table: string) {
    this.enrutador.navigate(['table-description', table.toLowerCase()]);
  }



  funReturn() {
    this.location.back();

  }
}
