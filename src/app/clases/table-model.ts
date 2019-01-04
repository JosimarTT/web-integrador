export class tableModel {
    public nombre_table: string;
    /**
     *
     */
    constructor(nombre: string, public contenido: {}[]) {
        this.nombre_table = nombre;
        //super();

    }
}