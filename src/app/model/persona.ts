export class Persona{
    id: number;
    image: string;
    name: string;
    title: string;
    descripcion: string;
    banner: string;
    frase: string;

    constructor(name: string, image: string, title: string, descripcion: string, banner: string, frase:string){
        this.image = image;
        this.name = name;
        this.title = title;
        this.descripcion = descripcion;
        this.banner = banner;
        this.frase = frase;
    }
}