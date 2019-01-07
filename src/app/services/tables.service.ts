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

  loadTables(db: string): Array<string> {
    let contenido = [];
    this.tables.forEach(element => {
      if (db === element.schema) {
        contenido = element.contenido;
      }
    });
    return contenido;
  }

  loadImg(db: string): string {
    let img: string;
    this.tables.forEach(element => {
      if (db === element.schema) {
        img = element.img;
      }
    });
    return img;
  }

  fillTables() {
    this.table = new schemaModel("DB Principal", ["transactional.tb_configuracion", "transactional.tb_documento",
      "transactional.tb_resumen_comprobante", "transactional.tb_documento_registro", "transactional.tb_spam",
      "transactional.tb_notificacion", "transactional.tb_error", "repository.tb_factura",
      "repository.tb_boleta"], 'assets/img/tables_principal.png');
    this.tables.push(this.table);
    this.table = new schemaModel("DB Control", ["control.tb_contribuyente", "control.tb_comprobante",
      "control.logging_event", "control.tb_ose", "control.tb_multiple", "control.tb_parametro", "control.tb_moneda", "control.tb_catalogo", "control.tb_pais"],
      'assets/img/tables_control.png');
    this.tables.push(this.table);
    this.table = new schemaModel("DB Seguridad", ["security.tb_empresa", "security.tb_impresion_personalizada",
      "security.tb_oauth_client", "security.tb_user", "security.tb_user_oauth_client", "security.tb_role_user", "security.tb_permission",
      "security.tb_role", "security.tb_permission_role"], 'assets/img/tables_seguridad.png');
    this.tables.push(this.table);
  }
}
