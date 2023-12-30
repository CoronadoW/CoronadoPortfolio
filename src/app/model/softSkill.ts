export class SoftSkill {
    id?: number;
    softSkill: string;
    softPorcentaje: number;
    softInnerColor: string;
    softOuterColor: string;

    constructor(softSkill: string, softPorcentaje: number, softInnerColor: string, softOuterColor: string) {
        this.softSkill = softSkill;
        this.softPorcentaje = softPorcentaje;
        this.softInnerColor = softInnerColor;
        this.softOuterColor = softOuterColor;
    }
}