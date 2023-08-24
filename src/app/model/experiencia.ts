export class Experiencia {
    id?: number;
    lugarExp: string;
    descripcionExp: string;
    anioExp: string;
    imgExp: string;

    constructor(lugarExp: string, descripcionExp: string, anioExp: string, imgExp: string) {
        this.lugarExp = lugarExp;
        this.descripcionExp = descripcionExp;
        this.anioExp = anioExp;
        this.imgExp = imgExp;
    }


}
