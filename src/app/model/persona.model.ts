export class persona {
    id?: number;
    nombre: String;
    titulo: String;
    img: String;

    constructor(nombre: String, titulo: String, img: String) {
        this.nombre = nombre;
        this.titulo = titulo;
        this.img = img;
    }
}

/* implementacion del back/base de datos en el front. mgb */