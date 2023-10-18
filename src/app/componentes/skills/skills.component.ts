import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillServiceService } from 'src/app/servicios/skill-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  skill: Skill[] = [];

  constructor(private skillService: SkillServiceService, private auth: Auth, private router: Router) { }

  isLogged = false;

  ngOnInit(): void {
    this.showSkill();
    if (this.auth.currentUser) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  showSkill() {
    this.skillService.listaSkill().subscribe(data => { this.skill = data; })
  }

  deleteSkill(id?: number) {
    if (id != undefined) {
      this.skillService.borrarSkill(id).subscribe(
        data => {
          alert("Se borró el Skill con id " + (id))
          this.showSkill();
        }, err => {
          alert("No se borró la skill");
        }
      )
    }
  }

}
