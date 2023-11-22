import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/servicios/educacion-service.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  lugarEdu: string = '';
  descripcionEdu: string = '';
  anioEdu: string = '';
  imgEdu: string = ''


  constructor(private educacionService: EducacionServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.lugarEdu, this.descripcionEdu, this.anioEdu, this.imgEdu);
    this.educacionService.crearEducacion(educacion).subscribe(
      data => {
        alert("Nueva Educacion añadida");
        this.router.navigate(['educacion']);
      }, err => {
        alert("Algo salió mal");
        this.router.navigate(['educacion']);
      }
    )
  }
}
