import { Component, OnInit } from '@angular/core';
import { DatabasesService } from '../services/databases.service';
import { dbModel } from '../clases/db-model';

@Component({
  selector: 'app-db-img',
  templateUrl: './db-img.component.html',
  styleUrls: ['./db-img.component.css']
})
export class DbImgComponent implements OnInit {
  public dbslocal: Array<dbModel> = [];

  constructor(private servicioDatos: DatabasesService) {
    this.dbslocal = [];
    this.loadDatabases();
  }

  ngOnInit() {
  }

  loadDatabases() {
    this.dbslocal = this.servicioDatos.loadDatabases();
    console.log(this.dbslocal);
  }

}
