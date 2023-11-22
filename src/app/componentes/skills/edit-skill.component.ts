import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillServiceService } from 'src/app/servicios/skill-service.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = {
    titulo: '',
    porcentaje: 0,
  };

  constructor(private skillService: SkillServiceService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.encuentraSkillId(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("No se edito el Skill");
        this.router.navigate(['skills']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.editarSkill(id, this.skill).subscribe(
      data => {
        this.router.navigate(['skills']);
      }, err => {
        alert("No se pudo editar Skill");
        this.router.navigate(['skills']);
      }
    )
  }
}
