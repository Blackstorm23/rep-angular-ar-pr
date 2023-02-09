export class Proyectos {
    id: number;
    nombreproyec:string;
    url:string;
    fecha:string;
    descripcion:string;
    
    constructor(nombreproyec:string, url:string, fecha:string, descripcion:string){
        this.nombreproyec = nombreproyec;
        this.url = url;
        this.fecha = fecha;
        this. descripcion = descripcion;
    }
}
