export class schemaModel {
    public schema: string;
    /**
     *
     */
    constructor(nombre: string, public contenido: string[]) {
        this.schema = nombre;
        //super();

    }
}