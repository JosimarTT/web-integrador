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

  loadTableDesc(table: string): string {
    let tableDesc = '';
    this.descriptions.forEach(element => {
      if (table === element.nombre_table) {
        tableDesc = element.tableDesc;
      }
    });
    return tableDesc;
  }

  fillDescriptions() {
    this.description = new tableModel("tb_configuracion", [
      {
        llave: "PK",
        nombre: "llave",
        tipo: "VARCHAR",
        longitud: 50,
        descripcion: "Campo para almacenar el valor llave del registro"
      }, {
        llave: "",
        nombre: "valor",
        tipo: "VARCHAR",
        longitud: 500,
        descripcion: "Campo con el valor de la llave"
      }
    ], 'Utilizada para almacenar valores de configuración global para el sistema de facturación electrónica');
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_documento", [
      {
        llave: "PK",
        nombre: "id",
        tipo: "BIGSERIAL",
        longitud: "",
        descripcion: "Incremental de la tabla"
      },
      {
        llave: "",
        nombre: "tip_documento",
        tipo: "VARCHAR",
        longitud: 2,
        descripcion: "Tipo de documento"
      },
      {
        llave: "",
        nombre: "ser_documento",
        tipo: "VARCHAR",
        longitud: 13,
        descripcion: "Campo compuesto por la serie y el secuencial del documento"
      },
      {
        llave: "",
        nombre: "serie",
        tipo: "VARCHAR",
        longitud: 9,
        descripcion: "Serie del documento"
      },
      {
        llave: "",
        nombre: "secuencial",
        tipo: "INTEGER",
        longitud: "",
        descripcion: "Número secuencial de documento"
      },
      {
        llave: "",
        nombre: "tip_doc_emisor",
        tipo: "VARCHAR",
        longitud: 1,
        descripcion: "Tipo de documento que posee el emisor"
      },
      {
        llave: "",
        nombre: "num_doc_emisor",
        tipo: "VARCHAR",
        longitud: 15,
        descripcion: "Número de documento que posee el emisor; estos últimos 5 campos son identificadores únicos de un documento en todo el dominio de facturación electrónica"
      },
      {
        llave: "",
        nombre: "tip_doc_adquiriente",
        tipo: "VARCHAR",
        longitud: 1,
        descripcion: "Tipo de documento del sujeto adquiriente"
      },
      {
        llave: "",
        nombre: "num_doc_adquiriente",
        tipo: "VARCHAR",
        longitud: 15,
        descripcion: "Número de documento del sujeto adquiriente"
      },
      {
        llave: "",
        nombre: "estado",
        tipo: "VARCHAR",
        longitud: 5,
        descripcion: "Estado del documento"
      },
      {
        llave: "",
        nombre: "fec_creacion",
        tipo: "TIMESTAMP",
        longitud: "",
        descripcion: "Almacena la fecha y hora de creación del registro en la tabla"
      },
      {
        llave: "",
        nombre: "fec_emision",
        tipo: "DATE",
        longitud: "",
        descripcion: "Fecha y hora de emisión del documento"
      },
      {
        llave: "",
        nombre: "data",
        tipo: "JSONB",
        longitud: 50,
        descripcion: "Almacena la información completa del documento en formato JSON"
      },
      {
        llave: "",
        nombre: "ose",
        tipo: "INTEGER",
        longitud: "",
        descripcion: "Guarda el identificador de la OSE a la cual el documento fue declarado"
      },
      {
        llave: "",
        nombre: "visible",
        tipo: "",
        longitud: "",
        descripcion: "Campo que permite un bloqueo lógico de los registros"
      }], 'Tabla principal del esquema, almacena la información de todos los tipos de documentos procesados por el sistema de facturación electrónica. Según la naturaleza de su función, la información es transitoria en el sentido de que no persiste mucho tiempo en esta tabla');
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_resumen_comprobante", [
      {
        llave: "",
        nombre: "doc_resumen",
        tipo: "VARCHAR",
        longitud: 50,
        descripcion: "Almacena los cinco campos de unicidad de un documento resumen"
      },
      {
        llave: "",
        nombre: "doc_detalle",
        tipo: "VARCHAR",
        longitud: 50,
        descripcion: "Almacena los cinco campos de unicidad de un documento detalle asociado a un resumen"
      },
      {
        llave: "",
        nombre: "doc_condicion",
        tipo: "INTEGER",
        longitud: "",
        descripcion: "Valor utilizado por el sistema de facturación electrónica"
      },], 'Tiene como finalidad mantener la relación entre un documento resumen y sus documentos detalle');
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_documento_registro", [
      {
        llave: "PK",
        nombre: "id",
        tipo: "BIGSERIAL",
        longitud: "",
        descripcion: "Incremental de la tabla"
      },
      {
        llave: "",
        nombre: "id_documento",
        tipo: "INTEGER",
        longitud: "",
        descripcion: "Identificador del registro en la tabla tb_documento"
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
        descripcion: "Operación realizada con el documento"
      },
      {
        llave: "",
        nombre: "accion",
        tipo: "VARCHAR",
        longitud: 500,
        descripcion: "Nombre de la operación realizada con el documento"
      },
      {
        llave: "",
        nombre: "estado",
        tipo: "VARCHAR",
        longitud: 5,
        descripcion: "Estado del documento"
      },
      {
        llave: "",
        nombre: "fec_creacion",
        tipo: "TIMESTAMP",
        longitud: "",
        descripcion: "Almacena la fecha y hora de creación del registro en la tabla"
      }], 'El objetivo de esta tabla es registrar todas las operaciones que el sistema de facturación electrónica realiza con un documento');
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_spam", [
      {
        llave: "",
        nombre: "MAIL",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: "Correo electrónico a bloquear"
      },
      {
        llave: "",
        nombre: "active",
        tipo: "BOOLEAN",
        longitud: "",
        descripcion: "Correo electrónico a bloquear"
      },
      {
        llave: "",
        nombre: "reason",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: "Almacena la información o motivo del bloque"
      }], 'El objetivo de esta tabla es almacenar las direcciones de correo electrónico que serán bloqueadas en el proceso de notificación');
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_notificacion", [
      {
        llave: "PK",
        nombre: "id",
        tipo: "BIGSERIAL",
        longitud: "",
        descripcion: "Incremental de la tabla"
      },
      {
        llave: "",
        nombre: "id_documento",
        tipo: "INTEGER",
        longitud: "",
        descripcion: "Identificador del registro en la tabla tb_documento"
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
        descripcion: "Utilizado para ordenar el orden de salida, el mayor valor tiene mayor prioridad"
      },
      {
        llave: "",
        nombre: "tipo",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: "Tipo de notificación"
      },
      {
        llave: "",
        nombre: "estado",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: "Estado de la notificación"
      },
      {
        llave: "",
        nombre: "parametros",
        tipo: "JSONB",
        longitud: "",
        descripcion: "Información en formato JSON útil para el envío de notificaciones"
      },
      {
        llave: "",
        nombre: "fec_envio",
        tipo: "TIMESTAMP",
        longitud: "",
        descripcion: "Fecha y hora del envío de la notificación"
      },
      {
        llave: "",
        nombre: "fec_creacion",
        tipo: "TIMESTAMP",
        longitud: "",
        descripcion: ""
      },], 'Almacena todas las notificaciones generadas por el sistema de facturación electrónica');
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_error", [
      {
        llave: "PK",
        nombre: "codigo",
        tipo: "VARCHAR",
        longitud: 4,
        descripcion: "Código del error"
      },
      {
        llave: "PK",
        nombre: "documento",
        tipo: "VARCHAR",
        longitud: 50,
        descripcion: "Información útil para el sistema de facturación electrónica"
      },
      {
        llave: "",
        nombre: "descripcion",
        tipo: "VARCHAR",
        longitud: 500,
        descripcion: "Descripción del error"
      },
      {
        llave: "",
        nombre: "retorno",
        tipo: "INTEGER",
        longitud: "",
        descripcion: "Información útil para el sistema de facturación electrónica"
      },
      {
        llave: "",
        nombre: "bloqueante",
        tipo: "INTEGER",
        longitud: "",
        descripcion: "Información útil para el sistema de facturación electrónica"
      },], 'Almacena los códigos de error y descripción, utilizado por el sistema de facturación electrónica');
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
        descripcion: "Almacena la información completa del documento en formato JSON"
      }], 'Almacena la información histórica de todos los documentos del tipo FACTURA');
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
      }], 'Almacena la información histórica de todos los documentos del tipo BOLETA');
    this.descriptions.push(this.description);
    this.description = new tableModel('tb_resumen_comprobante', [

    ], 'Información histórica de la tabla TRANSACTIONAL.TB_RESUMEN_COMPROBANTE');
    this.descriptions.push(this.description);
    this.description = new tableModel('vw_documentos', [

    ], 'Esta vista tiene el objetivo de mostrar todos los registros almacenados en las tablas TRANSACTIONAL.TB_DOCUMENTO en unión con las demás tablas del esquema REPOSITORY por tipo de documento. Está definida como una vista simple, pero dada la magnitud del crecimiento de la información en el esquema REPOSITORY es recomendable definir una vista materializada');
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_contribuyente", [
      {
        llave: "PK",
        nombre: "codigo",
        tipo: "VARCHAR",
        longitud: 15,
        descripcion: "Número de documento identificador del sujeto contribuyente o emisor, dentro del dominio de facturación electrónica"
      },
      {
        llave: "",
        nombre: "estado",
        tipo: "INTEGER",
        longitud: "",
        descripcion: "Número indicador de habilitación del emisor. Cero significa activo"
      }], 'Almacena información de los sujetos emisores dentro del dominio de facturación electrónica');
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_comprobante", [
      {
        llave: "PK",
        nombre: "id",
        tipo: "BIGSERIAL",
        longitud: "",
        descripcion: "Incremental de la tabla"
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
        descripcion: "Puede tomar dos valores TAKEN o USED"
      },
      {
        llave: "",
        nombre: "fec_creacion",
        tipo: "TIMESTAMP",
        longitud: "",
        descripcion: ""
      }], 'Dentro de la naturaleza funcional de la BD CONTROL, esta tabla es fundamental para llevar el control de todos aquellos documentos que son procesados por el sistema de facturación electrónica, en base a los campos de unicidad de un documento');
    this.descriptions.push(this.description);
    this.description = new tableModel("logging_event", [
      {
        llave: "PK",
        nombre: "event_id",
        tipo: "BIGINT",
        longitud: "",
        descripcion: "Incremental de la tabla"
      },
      {
        llave: "",
        nombre: "event",
        tipo: "JSONB",
        longitud: "",
        descripcion: "Cada registro es una línea del log generado por alguna aplicación del sistema de facturación electrónica en formato JSON"
      }], 'Esta tabla almacena todo los logs generados por las diferentes aplicaciones del sistema de facturación electrónica');
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_ose", [
      {
        llave: "",
        nombre: "id",
        tipo: "INTEGER",
        longitud: "",
        descripcion: "Incremental de la tabla"
      },
      {
        llave: "",
        nombre: "nombre",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: "Nombre descriptivo de la OSE registrada"
      },
      {
        llave: "",
        nombre: "tip_documento",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: "Tipo de documento que la entidad OSE recibe"
      },
      {
        llave: "",
        nombre: "endpoints",
        tipo: "JSONB",
        longitud: "",
        descripcion: "Información en formato JSON que permite clasificar las diferentes URLs utilizadas por una entidad OSE para recibir la declaración de un tipo de documento (o de todos por defecto)"
      },], 'Sirve para registrar todas las entidades OSE a quienes se enviarán los documentos a declarar');
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
      },], 'Tabla heredada del modelo de datos anterior');
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
      }], 'Tabla heredada del modelo de datos anterior');
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
      }], 'Tabla heredada del modelo de datos anterior');
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
      }], 'Tabla heredada del modelo de datos anterior');
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
      }], 'Tabla heredada del modelo de datos anterior');
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
        descripcion: "Razón social del emisor"
      },
      {
        llave: "",
        nombre: "usu_sol",
        tipo: "VARCHAR",
        longitud: 50,
        descripcion: "Usuario SOL del emisor"
      },
      {
        llave: "",
        nombre: "clv_sol",
        tipo: "VARCHAR",
        longitud: 200,
        descripcion: "Clave SOL del emisor"
      },
      {
        llave: "",
        nombre: "alias",
        tipo: "VARCHAR",
        longitud: 100,
        descripcion: "Identificador del certificado digital dentro del almacén de llaves"
      },
      {
        llave: "",
        nombre: "clv_almacen",
        tipo: "VARCHAR",
        longitud: 200,
        descripcion: "Contraseña para abrir el almacén de llaves"
      },
      {
        llave: "",
        nombre: "clv_alias",
        tipo: "VARCHAR",
        longitud: 200,
        descripcion: "Contraseña para abrir el certificado digital"
      },
      {
        llave: "",
        nombre: "almacen",
        tipo: "BYTEA",
        longitud: "",
        descripcion: "Almacén de llaves"
      },
      {
        llave: "",
        nombre: "tip_almacen",
        tipo: "VARCHAR",
        longitud: 5,
        descripcion: "Tipo de almacén de llaves"
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
        descripcion: "Información adicional del emisor en formato JSON. Muchos de los valores almacenados en este campo son heredados del modelo de datos anterior"
      }], 'Esta tabla tiene la finalidad de almacenar toda la información respecto a la entidad emisor dentro del dominio de facturación electrónica. Esto es, toda aquella información sensible y necesaria que el ente regulador identifique a esta entidad como emisor de facturación electrónica');
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
        descripcion: "Identifica el tipo de representación impresa"
      },
      {
        llave: "",
        nombre: "nom_canonico",
        tipo: "VARCHAR",
        longitud: "",
        descripcion: "Nombre canónico de la clase Java encargada de generar la representación impresa personalizada"
      }], 'Información útil para una de las aplicaciones del sistema de facturación electrónica, encargada de elaborar las representaciones impresas personalizadas de los documentos');
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_oauth_client", [
      {
        llave: "PK",
        nombre: "client_id",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: "Identificador único de la aplicación cliente"
      },
      {
        llave: "",
        nombre: "client_secret",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: "Clave secreta de la aplicación cliente"
      },
      {
        llave: "",
        nombre: "resource_ids",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: "Identificadores de los servicios que acceden a los recursos protegidos del usuario"
      },
      {
        llave: "",
        nombre: "scope",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: "Acciones permitidas a la aplicación cliente"
      },
      {
        llave: "",
        nombre: "authorized_grant_types",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: "Tipo de autorización asignada a la aplicación cliente"
      },
      {
        llave: "",
        nombre: "web_server_redirect_uri",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: "De redirección registrada a la aplicación cliente luego de la autorización de tipo implícito"
      },
      {
        llave: "",
        nombre: "authorities",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: "Roles permitidos en la aplicación cliente"
      },
      {
        llave: "",
        nombre: "access_token_validity",
        tipo: "INTEGER",
        longitud: "",
        descripcion: "Tiempo en milisegundos de validez de un token generado por el servidor OAUTH2"
      },
      {
        llave: "",
        nombre: "refresh_token_validity",
        tipo: "INTEGER",
        longitud: "",
        descripcion: "Tiempo en milisegundos de validez de un token de refresco"
      },
      {
        llave: "",
        nombre: "additional_information",
        tipo: "JSON",
        longitud: "",
        descripcion: "Cualquier otro tipo de información adicional de la aplicación cliente en formato JSON"
      },
      {
        llave: "",
        nombre: "autoapprove",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: "Roles que fueron aprovados por defecto para la aplicación cliente"
      }], 'Información útil para el estándar OAUTH2. Almacena la información de la aplicación cliente que accede a los recursos protegidos del usuario');
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_user", [
      {
        llave: "PK",
        nombre: "id",
        tipo: "BIGSERIAL",
        longitud: "",
        descripcion: "Incremental de la tabla"
      },
      {
        llave: "",
        nombre: "username",
        tipo: "VARCHAR",
        longitud: 24,
        descripcion: "Username del usuario útil para el mecanismo de autenticación"
      },
      {
        llave: "",
        nombre: "password",
        tipo: "VARCHAR",
        longitud: 255,
        descripcion: "Password del usuario útil para el mecanismo de autenticación"
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
        descripcion: "Activo o no"
      },
      {
        llave: "",
        nombre: "account_expired",
        tipo: "BOOLEAN",
        longitud: "",
        descripcion: "Cuenta expirada o no"
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
        descripcion: "Cuenta bloqueada o no"
      }], 'Almacena la información del usuario dueño de los recursos');
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
      }], 'Tabla de relación de muchos a muchos entre tb_user y tb_oauth_client');
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_permission", [
      {
        llave: "PK",
        nombre: "id",
        tipo: "BIGSERIAL",
        longitud: "",
        descripcion: "Incremental de la tabla"
      },
      {
        llave: "",
        nombre: "name",
        tipo: "VARCHAR",
        longitud: 60,
        descripcion: "Nombre del permiso"
      }], 'Almacena la información de los permisos dentro del dominio del sistema de facturación electrónica para los usuario con acceso a recursos protegidos');
    this.descriptions.push(this.description);
    this.description = new tableModel("tb_role", [
      {
        llave: "PK",
        nombre: "id",
        tipo: "BIGSERIAL",
        longitud: "",
        descripcion: "Incremental de la tabla"
      },
      {
        llave: "",
        nombre: "name",
        tipo: "VARCHAR",
        longitud: 60,
        descripcion: "Nombre del rol"
      }], 'Almacena la información de los roles dentro del dominio del sistema de facturación electrónica para los usuario con acceso a recursos protegidos');
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
      }], 'Tabla de relación de muchos a muchos entre tb_role y tb_permission');
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
      }], 'Tabla de relación de muchos a muchos entre tb_role y tb_user');
    this.descriptions.push(this.description);
  }

}
