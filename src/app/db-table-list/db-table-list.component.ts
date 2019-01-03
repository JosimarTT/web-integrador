import { Component, OnInit } from '@angular/core';
import { schemaModel } from '../clases/schema-model';

@Component({
  selector: 'app-db-table-list',
  templateUrl: './db-table-list.component.html',
  styleUrls: ['./db-table-list.component.css']
})
export class DbTableListComponent implements OnInit {
  private schema1: schemaModel;
  private schema2: schemaModel;
  private schema3: schemaModel;
  private schema4: schemaModel;

  constructor() { }

  ngOnInit() {
  }

  loadSchemas() {
    this.schema1 = new schemaModel("SCHEMA transactional", ["tb_configuracion", "tb_documento",
      "tb_resumen_comprobante", "tb_documento_registro", "tb_spam", "tb_notificacion", "tb_error"]);
    this.schema2 = new schemaModel("SCHEMA repository", ["tb_factura", "tb_boleta", "tb_documentos"]);
    this.schema3 = new schemaModel("SCHEMA control", ["tb_contribuyente", "tb_comprobante",
      "logging_event", "tb_ose", "tb_multiple", "tb_parametro", "tb_moneda", "tb_catalogo", "tb_pais"]);
    this.schema4 = new schemaModel("SCHEMA security", ["tb_empresa", "tb_impresion_personalizada",
      "tb_oauth_client", "tb_user", "tb_user_oauth_client", "tb_role_user", "tb_permission",
      "tb_role", "tb_permission_role"]);
  }

}
