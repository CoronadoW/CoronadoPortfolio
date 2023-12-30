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
    id: undefined,
    lugarEdu: '',
    descripcionEdu: '',
    anioEdu: '',
    imgEdu: '',
  };

  constructor(
    private educacionService: EducacionServiceService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.traeId(id).subscribe(
      (data) => {
        this.educa = data;
      },
      (err) => {
        alert('No se encontró educación');
        this.router.navigate(['educacion']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.editarId(id, this.educa).subscribe(
      (data) => {
        alert('La educación ' + (id) + ' fue editada')
        this.router.navigate(['educacion']);
      },
      (err) => {
        alert('No se pudo editar educación');
        this.router.navigate(['educacion']);
      }
    );
  }
}
