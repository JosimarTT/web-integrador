export class dbModel {
    private nombre_db: string;
    private lista_esquema: string[];
    /**
     *
     */
    constructor(nombre: string, public dbImg: string) {
        this.nombre_db = nombre;
        // super();
    }
}