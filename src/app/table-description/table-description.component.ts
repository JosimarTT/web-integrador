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
  private tableName: string;
  private description: object[];

  constructor(private location: Location, private active: ActivatedRoute, private servicioDatos: DescriptionsService) {
    this.active.params.subscribe(
      (params) => {
        this.tableName = params.table;
      }
    )

    this.loadDescriptions(this.tableName);
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
}
