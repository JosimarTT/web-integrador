export class schemaModel {
    public schema: string;
    /**
     *
     */
    constructor(nombre: string, public contenido: string[], public img: string) {
        this.schema = nombre;
        //super();

    }
}