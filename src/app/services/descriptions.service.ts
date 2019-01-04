import { Injectable } from '@angular/core';
import { tableModel } from '../clases/table-model';

@Injectable({
  providedIn: 'root'
})
export class DescriptionsService {
  private descriptions: Array<tableModel> = [];
  private description: tableModel;

  constructor() {
    this.fillDescriptions();
  }

  loadDescription(table: string): Array<object> {
    let description = [];
    this.descriptions.forEach(element => {
      if (table === element.nombre_table) {
        description = element.contenido;
      }
    });
    return description;
  }

  fillDescriptions() {
    this.description = new tableModel("tb_configuracion", [
      {
        llave: "PK",
        nombre: "llave",
        tipo: "VARCHAR",
        longitud: 50,
        descripcion: ""
      }, {
        llave: "",
        nombre: "valor",
        tipo: "VARCHAR",
        longitud: 500,
        descripcion: ""
      }
    ]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_documento", [
      {
        llave: "PK",
        nombre: "id",
        tipo: "BIGSERIAL",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "tip_documento",
        tipo: "VARCHAR",
        longitud: 2,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "ser_documento",
        tipo: "VARCHAR",
        longitud: 13,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "serie",
        tipo: "VARCHAR",
        longitud: 9,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "secuencial",
        tipo: "INTEGER",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "tip_doc_emisor",
        tipo: "VARCHAR",
        longitud: 1,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "num_doc_emisor",
        tipo: "VARCHAR",
        longitud: 15,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "tip_doc_adquiriente",
        tipo: "VARCHAR",
        longitud: 1,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "num_doc_adquiriente",
        tipo: "VARCHAR",
        longitud: 15,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "estado",
        tipo: "VARCHAR",
        longitud: 5,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "fec_creacion",
        tipo: "TIMESTAMP",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "fec_emision",
        tipo: "DATE",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "data",
        tipo: "JSONB",
        longitud: 50,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "ose",
        tipo: "INTEGER",
        longitud: "",
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_resumen_comprobante", [
      {
        llave: "",
        nombre: "doc_resumen",
        tipo: "VARCHAR",
        longitud: 50,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "doc_detalle",
        tipo: "VARCHAR",
        longitud: 50,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "doc_condicion",
        tipo: "INTEGER",
        longitud: "",
        descripcion: ""
      },]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_documento_registro", [
      {
        llave: "PK",
        nombre: "id",
        tipo: "BIGSERIAL",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "id_documento",
        tipo: "INTEGER",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "tip_doc_emisor",
        tipo: "VARCHAR",
        longitud: 1,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "num_doc_emisor",
        tipo: "VARCHAR",
        longitud: 15,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "tip_documento",
        tipo: "VARCHAR",
        longitud: 2,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "serie",
        tipo: "VARCHAR",
        longitud: 9,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "secuencial",
        tipo: "INTEGER",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "mensaje",
        tipo: "VARCHAR",
        longitud: 500,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "accion",
        tipo: "VARCHAR",
        longitud: 500,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "estado",
        tipo: "VARCHAR",
        longitud: 5,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "fec_creacion",
        tipo: "TIMESTAMP",
        longitud: "",
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_spam", [
      {
        llave: "",
        nombre: "MAIL",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "active",
        tipo: "BOOLEAN",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "reason",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_notificacion", [
      {
        llave: "PK",
        nombre: "id",
        tipo: "BIGSERIAL",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "id_documento",
        tipo: "INTEGER",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "tip_doc_emisor",
        tipo: "VARCHAR",
        longitud: 1,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "num_doc_emisor",
        tipo: "VARCHAR",
        longitud: 15,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "tip_documento",
        tipo: "VARCHAR",
        longitud: 2,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "serie",
        tipo: "VARCHAR",
        longitud: 9,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "secuencial",
        tipo: "INTEGER",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "prioridad",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "tipo",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "estado",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "parametros",
        tipo: "JSONB",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "fec_envio",
        tipo: "TIMESTAMP",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "fec_creacion",
        tipo: "TIMESTAMP",
        longitud: "",
        descripcion: ""
      },]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_error", [
      {
        llave: "PK",
        nombre: "codigo",
        tipo: "VARCHAR",
        longitud: 4,
        descripcion: ""
      },
      {
        llave: "PK",
        nombre: "documento",
        tipo: "VARCHAR",
        longitud: 50,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "descripcion",
        tipo: "VARCHAR",
        longitud: 500,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "retorno",
        tipo: "INTEGER",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "bloqueante",
        tipo: "INTEGER",
        longitud: "",
        descripcion: ""
      },]);
    this.description = new tableModel("tb_factura", [
      {
        llave: "PK",
        nombre: "tipoDocumentoEmisor",
        tipo: "VARCHAR",
        longitud: 1,
        descripcion: ""
      },
      {
        llave: "PK",
        nombre: "numeroDocumentoEmisor",
        tipo: "VARCHAR",
        longitud: 15,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "serieNumero",
        tipo: "VARCHAR",
        longitud: 9,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "secuencial",
        tipo: "BIGINT",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "tipoDocumento",
        tipo: "VARCHAR",
        longitud: 30,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "data",
        tipo: "JSONB",
        longitud: "",
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_boleta", [
      {
        llave: "PK",
        nombre: "tipoDocumentoEmisor",
        tipo: "VARCHAR",
        longitud: 1,
        descripcion: ""
      },
      {
        llave: "PK",
        nombre: "numeroDocumentoEmisor",
        tipo: "VARCHAR",
        longitud: 15,
        descripcion: ""
      },
      {
        llave: "PK",
        nombre: "serieNumero",
        tipo: "VARCHAR",
        longitud: 9,
        descripcion: ""
      },
      {
        llave: "PK",
        nombre: "secuencial",
        tipo: "BIGINT",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "tipoDocumento",
        tipo: "VARCHAR",
        longitud: 30,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "data",
        tipo: "JSONB",
        longitud: "",
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_contribuyente", [
      {
        llave: "PK",
        nombre: "codigo",
        tipo: "VARCHAR",
        longitud: 15,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "estado",
        tipo: "INTEGER",
        longitud: "",
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_comprobante", [
      {
        llave: "PK",
        nombre: "id",
        tipo: "BIGSERIAL",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "tip_doc_emisor",
        tipo: "VARCHAR",
        longitud: 1,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "num_doc_emisor",
        tipo: "VARCHAR",
        longitud: 15,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "tip_documento",
        tipo: "VARCHAR",
        longitud: 2,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "serie",
        tipo: "VARCHAR",
        longitud: 9,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "secuencial",
        tipo: "INTEGER",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "estado",
        tipo: "VARCHAR",
        longitud: 9,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "fec_creacion",
        tipo: "TIMESTAMP",
        longitud: "",
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("logging_event", [
      {
        llave: "PK",
        nombre: "event_id",
        tipo: "BIGINT",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "event",
        tipo: "JSONB",
        longitud: "",
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_ose", [
      {
        llave: "",
        nombre: "id",
        tipo: "INTEGER",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "nombre",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "tip_documento",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "endpoints",
        tipo: "JSONB",
        longitud: "",
        descripcion: ""
      },]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_multiple", [
      {
        llave: "",
        nombre: "cod_item_tabla",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "no_tabla",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "no_corto",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "no_largo",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      },]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_parametro", [
      {
        llave: "",
        nombre: "da_valor_parametro",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "no_parametro",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "co_parametro",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_moneda", [
      {
        llave: "",
        nombre: "co_tipo_moneda",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "no_tipo_moneda",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_catalogo", [
      {
        llave: "",
        nombre: "codigo",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "nombre_largo",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "no_catalogo",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_pais", [
      {
        llave: "",
        nombre: "id",
        tipo: "VARCHAR",
        longitud: 2,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "nombre",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "codigo",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_empresa", [
      {
        llave: "PK",
        nombre: "tip_cod_tributario",
        tipo: "VARCHAR",
        longitud: 1,
        descripcion: ""
      },
      {
        llave: "PK",
        nombre: "cod_tributario",
        tipo: "VARCHAR",
        longitud: 20,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "raz_social",
        tipo: "VARCHAR",
        longitud: 500,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "usu_sol",
        tipo: "VARCHAR",
        longitud: 50,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "clv_sol",
        tipo: "VARCHAR",
        longitud: 200,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "alias",
        tipo: "VARCHAR",
        longitud: 100,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "clv_almacen",
        tipo: "VARCHAR",
        longitud: 200,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "clv_alias",
        tipo: "VARCHAR",
        longitud: 200,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "almacen",
        tipo: "BYTEA",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "tip_almacen",
        tipo: "VARCHAR",
        longitud: 5,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "fec_creacion",
        tipo: "TIMESTAMP",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "data",
        tipo: "JSONB",
        longitud: "",
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_impresion_personalizada", [
      {
        llave: "",
        nombre: "tip_cod_tributario",
        tipo: "VARCHAR",
        longitud: 1,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "cod_tributario",
        tipo: "VARCHAR",
        longitud: 20,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "tip_documento",
        tipo: "VARCHAR",
        longitud: 2,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "tipo",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "nom_canonico",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_oauth_client", [
      {
        llave: "PK",
        nombre: "client_id",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "client_secret",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "resource_ids",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "scope",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "authorized_grant_types",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "web_server_redirect_uri",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "authorities",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "access_token_validity",
        tipo: "INTEGER",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "refresh_token_validity",
        tipo: "INTEGER",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "autoapprove",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_user", [
      {
        llave: "PK",
        nombre: "id",
        tipo: "BIGSERIAL",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "username",
        tipo: "VARCHAR",
        longitud: 24,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "password",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "email",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: ""
      },
      {
        llave: "",
        nombre: "enabled",
        tipo: "BOOLEAN",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "account_expired",
        tipo: "BOOLEAN",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "credentials_expired",
        tipo: "BOOLEAN",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "account_locked",
        tipo: "BOOLEAN",
        longitud: "",
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_user_oauth_client", [
      {
        llave: "FK",
        nombre: "user_id",
        tipo: "BIGINT",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "FK",
        nombre: "client_id",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_role_user", [
      {
        llave: "FK",
        nombre: "role_id",
        tipo: "BIGINT",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "FK",
        nombre: "user_id",
        tipo: "BIGINT",
        longitud: "",
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_permission", [
      {
        llave: "PK",
        nombre: "id",
        tipo: "BIGSERIAL",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "name",
        tipo: "VARCHAR",
        longitud: 60,
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_role", [
      {
        llave: "PK",
        nombre: "id",
        tipo: "BIGSERIAL",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "",
        nombre: "name",
        tipo: "VARCHAR",
        longitud: 60,
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_permission_role", [
      {
        llave: "FK",
        nombre: "permission_id",
        tipo: "BIGINT",
        longitud: "",
        descripcion: ""
      },
      {
        llave: "FK",
        nombre: "role_id",
        tipo: "BIGINT",
        longitud: "",
        descripcion: ""
      }]);
    this.descriptions.push(this.description);
  }

}