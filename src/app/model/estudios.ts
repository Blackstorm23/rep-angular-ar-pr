export class Estudios {
    id: number;
    logo: string;
    nombreInstituto: string;
    inicio: string;
    fin:string;
    titulo: string;

    constructor(logo:string, nombreInstituto:string, inicio: string, fin: string, titulo:string) {
        this.logo = logo;
        this.nombreInstituto = nombreInstituto;
        this.inicio = inicio;
        this.fin = fin;
        this.titulo = titulo;
    }
}
