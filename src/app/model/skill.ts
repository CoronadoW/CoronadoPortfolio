export class Skill {
    id?: number;
    titulo: string;
    porcentaje: number;
    innerColor: string;
    outerColor: string;

    constructor(titulo: string, porcentaje: number, innerColor: string, outerColor: string) {

        this.titulo = titulo;
        this.porcentaje = porcentaje;
        this.innerColor = innerColor;
        this.outerColor = outerColor;
    }
}