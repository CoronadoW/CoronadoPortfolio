import { Component, OnInit } from '@angular/core';
import { SoftSkillService } from 'src/app/servicios/soft-skill.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SoftSkill } from 'src/app/model/softSkill';
@Component({
  selector: 'app-edit-soft-skill',
  templateUrl: './edit-soft-skill.component.html',
  styleUrls: ['./edit-soft-skill.component.css']
})
export class EditSoftSkillComponent implements OnInit {
  softS: SoftSkill = {
    softSkill: '',
    softPorcentaje: 0,
  };

  constructor(private softSkillService: SoftSkillService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.softSkillService.encuentraSoftSkillId(id).subscribe(
      data => {
        this.softS = data;
      }, err => {
        alert("No se editó el Soft Skill");
        this.router.navigate(['softSkill']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.softSkillService.editarSoftSkill(id, this.softS).subscribe(
      data => {
        this.router.navigate(['softSkill']);
      }, err => {
        alert("No se pudo editar Soft Skill");
        this.router.navigate(['softSkill']);
      }
    )
  }

}
