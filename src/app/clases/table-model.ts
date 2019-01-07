export class tableModel {
    public nombre_table: string;
    /**
     *
     */
    constructor(nombre: string, public contenido: {}[], public tableDesc: string) {
        this.nombre_table = nombre;
        //super();

    }
}