export class Educacion {
    id?= number;
    lugarEdu: String;
    descripcionEdu: String;
    anioEdu: String;
    imgEdu: String;

    constructor(lugarEdu: String, descripcionEdu: String, anioEdu: String, imgEdu: String) {
        this.lugarEdu = lugarEdu;
        this.descripcionEdu = descripcionEdu;
        this.anioEdu = anioEdu;
        this.imgEdu = imgEdu;

    }

}