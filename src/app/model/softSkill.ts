export class SoftSkill {
    id?: number;
    softSkill: string;
    softPorcentaje: number;

    constructor(softSkill: string, softPorcentaje: number) {
        this.softSkill = softSkill;
        this.softPorcentaje = softPorcentaje;
    }
}