import { Injectable } from '@angular/core';
import { schemaModel } from '../clases/schema-model';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  private tables: Array<schemaModel> = [];
  private table: schemaModel;

  constructor() {
    this.fillTables();
  }

  loadTables2(db: string): schemaModel {
    switch (db) {
      case "DB Principal":
        return new schemaModel("DB Principal", ["tb_configuracion", "tb_documento",
          "tb_resumen_comprobante", "tb_documento_registro", "tb_spam", "tb_notificacion", "tb_error",
          "tb_factura", "tb_boleta"]);
        break;

      default:
        break;
    }
  }

  loadTables(db: string): Array<string> {
    let contenido = [];
    this.tables.forEach(element => {
      if (db === element.schema) {
        contenido = element.contenido;
      }
    });
    return contenido;
  }

  fillTables() {
    this.table = new schemaModel("DB Principal", ["tb_configuracion", "tb_documento",
      "tb_resumen_comprobante", "tb_documento_registro", "tb_spam", "tb_notificacion", "tb_error",
      "tb_factura", "tb_boleta"]);
    this.tables.push(this.table);
    this.table = new schemaModel("DB Control", ["tb_contribuyente", "tb_comprobante",
      "logging_event", "tb_ose", "tb_multiple", "tb_parametro", "tb_moneda", "tb_catalogo", "tb_pais"]);
    this.tables.push(this.table);
    this.table = new schemaModel("DB Seguridad", ["tb_empresa", "tb_impresion_personalizada",
      "tb_oauth_client", "tb_user", "tb_user_oauth_client", "tb_role_user", "tb_permission",
      "tb_role", "tb_permission_role"]);
    this.tables.push(this.table);
  }
}