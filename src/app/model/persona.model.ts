export class persona {
    id?: number;
    nombre: string;
    titulo: string;
    img: string;

    constructor(nombre: string, titulo: string, img: string) {
        this.nombre = nombre;
        this.titulo = titulo;
        this.img = img;
    }
}

/* implementacion del back/base de datos en el front. mgb */