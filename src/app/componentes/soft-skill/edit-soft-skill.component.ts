import { Component, OnInit } from '@angular/core';
import { SoftSkillService } from 'src/app/servicios/soft-skill.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftSkill } from 'src/app/model/softSkill';
@Component({
  selector: 'app-edit-soft-skill',
  templateUrl: './edit-soft-skill.component.html',
  styleUrls: ['./edit-soft-skill.component.css']
})
export class EditSoftSkillComponent implements OnInit {
  softSkill: SoftSkill = {
    id: undefined,
    softSkill: '',
    softPorcentaje: 0,
    softInnerColor: '',
    softOuterColor: '',
  };

  constructor(
    private softSkillService: SoftSkillService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.softSkillService.encuentraSoftSkillId(id).subscribe(
      (data) => {
        this.softSkill = data;
      },
      (err) => {
        alert('No se encontró el Soft Skill');
        this.router.navigate(['softSkill']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.softSkillService.editarSoftSkill(id, this.softSkill).subscribe(
      (data) => {
        alert('El soft skill fue editado')
        this.router.navigate(['softSkill']);
      },
      (err) => {
        alert('No se pudo editar Soft Skill');
        this.router.navigate(['softSkill']);
      }
    );
  }

}
