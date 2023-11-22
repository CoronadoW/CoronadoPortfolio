import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoftSkill } from 'src/app/model/softSkill';
import { SoftSkillService } from 'src/app/servicios/soft-skill.service';

@Component({
  selector: 'app-new-soft-skill',
  templateUrl: './new-soft-skill.component.html',
  styleUrls: ['./new-soft-skill.component.css']
})
export class NewSoftSkillComponent implements OnInit {

  softSkill: string = '';
  softPorcentaje: number = 0;

  constructor(private softSkillService: SoftSkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const softSkill = new SoftSkill(this.softSkill, this.softPorcentaje);
    this.softSkillService.salvarSoftSkill(softSkill).subscribe(
      data => {
        alert("Nuevo Soft Skill creado");
        this.router.navigate(['softSkill']);
      }, err => {
        alert("Algo salió mal al crear el nuevo Soft Skill");
        this.router.navigate(['softSkill']);
      }
    )
  }
}
