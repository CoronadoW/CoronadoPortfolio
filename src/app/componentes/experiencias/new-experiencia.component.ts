import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/servicios/experiencia-service.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  lugarExp: string = '';
  descripcionExp: string = '';
  anioExp: string = '';
  imgExp: string = '';

  constructor(private experienciaService: ExperienciaServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experiencia = new Experiencia(this.lugarExp, this.descripcionExp, this.anioExp, this.imgExp);
    this.experienciaService.create(experiencia).subscribe(
      data => {
        alert("Nueva experiencia añadida");
        this.router.navigate(['experiencias']);
      }, err => {
        alert("Algo debe haber salido mal");
        this.router.navigate(['experiencias']);
      }
    )
  }
}





