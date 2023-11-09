import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { SoftSkill } from 'src/app/model/softSkill';
import { SoftSkillService } from 'src/app/servicios/soft-skill.service';

@Component({
  selector: 'app-soft-skill',
  templateUrl: './soft-skill.component.html',
  styleUrls: ['./soft-skill.component.css']
})
export class SoftSkillComponent implements OnInit {
  softSkill: SoftSkill[] = [];

  constructor(private softSkillService: SoftSkillService, private auth: Auth, private router: Router) { }

  isLogged = false;

  ngOnInit(): void {
    this.showSoftSkill();
    if (this.auth.currentUser) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  showSoftSkill() {
    this.softSkillService.listaSoft().subscribe(data => { this.softSkill = data; })
  }

  deleteSoftSkill(id?: number) {
    if (id != undefined) {
      this.softSkillService.borrarSoftSkill(id).subscribe(
        data => {
          alert("Se borró el SoftSkill con id " + (id))
          this.showSoftSkill();
        }, err => {
          alert("No se borró el SoftSkill");
        }
      )
    }
  }

}
