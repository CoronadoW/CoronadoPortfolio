import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillServiceService } from 'src/app/servicios/skill-service.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  titulo: string = '';
  porcentaje: number = 0;

  constructor(private skillService: SkillServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skill(this.titulo, this.porcentaje);
    this.skillService.crearSkill(skill).subscribe(
      data => {
        alert("Nuevo Skill creado");
        this.router.navigate(['']);
      }, err => {
        alert("Algo salió mal en la creación del nuevo Skill");
        this.router.navigate(['']);
      }
    )
  }
} 
