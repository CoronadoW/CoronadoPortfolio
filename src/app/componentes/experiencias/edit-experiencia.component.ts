import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/servicios/experiencia-service.service';


@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = {
    lugarExp: '',
    descripcionExp: '',
    anioExp: '',
    imgExp: ''
  };

  constructor(private experienciaService: ExperienciaServiceService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.traeme(id).subscribe(
      data => {
        this.expLab = data;
      }, err => {
        alert("No se editó experiencia");
        this.router.navigate(['Experiencia']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['Experiencia']);
      }, err => {
        alert("No se pudo editar experiencia");
        this.router.navigate(['Experiencia']);
      }
    )
  }

}

