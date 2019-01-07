import { Component, OnInit } from '@angular/core';
import { tableModel } from '../clases/table-model';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DescriptionsService } from '../services/descriptions.service';

@Component({
  selector: 'app-table-description',
  templateUrl: './table-description.component.html',
  styleUrls: ['./table-description.component.css']
})
export class TableDescriptionComponent implements OnInit {
  public tableName: string;
  public table: string;
  public description: object[];

  constructor(private location: Location, private active: ActivatedRoute, private servicioDatos: DescriptionsService) {
    this.active.params.subscribe(
      (params) => {
        this.tableName = params.table;
        console.log(this.tableName);
      }
    )

    this.loadDescriptions(this.tableName);
    this.loadTableDesc(this.tableName);
    this.tableName = this.tableName.toUpperCase();
  }

  ngOnInit() {
  }
  funReturn() {
    this.location.back();
  }

  loadDescriptions(tableName: string) {
    this.description = this.servicioDatos.loadDescription(tableName);
    console.log(this.description);
  }

  loadTableDesc(tableName: string) {
    this.table = this.servicioDatos.loadTableDesc(tableName);
  }
}
