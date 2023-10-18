import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/servicios/educacion-service.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educa: Educacion = {
    lugarEdu: '',
    descripcionEdu: '',
    anioEdu: '',
    imgEdu: ''
  }

  constructor(private educacionService: EducacionServiceService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.traeId(id).subscribe(
      data => {
        this.educa = data;
      }, err => {
        alert("No se editó educación");
        this.router.navigate(['Educacion']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.editarEducacion(id, this.educa).subscribe(
      data => {
        this.router.navigate(['Educacion']);
      }, err => {
        alert("No se pudo editar educación");
        this.router.navigate(['Educacion']);
      }
    )
  }

}
