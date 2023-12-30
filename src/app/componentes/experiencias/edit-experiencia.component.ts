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
        alert("No se encontró experiencia");
        this.router.navigate(['experiencias']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.update(id, this.expLab).subscribe(
      data => {
        alert("Experiencia con id " + (id) + " fue editada")
        this.router.navigate(['experiencias']);
      }, err => {
        alert("No se pudo editar experiencia");
        this.router.navigate(['experiencias']);
      }
    )
  }

}

