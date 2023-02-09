export class Experiencia {
    id: number;
    logo : string;
    puesto : string;
    inicio : string;
    fin : string;
    descripcion : string;

    constructor(puesto:string, inicio: string, fin: string, descripcion:string, logo:string) {
        this.puesto = puesto;
        this.inicio = inicio;
        this.fin = fin;
        this.descripcion = descripcion;
        this.logo = logo;
    }
}