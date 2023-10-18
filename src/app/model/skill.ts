export class Skill {
    id?: number;
    titulo: string;
    porcentaje: number;

    constructor(titulo: string, porcentaje: number) {
        this.titulo = titulo;
        this.porcentaje = porcentaje;
    }
}