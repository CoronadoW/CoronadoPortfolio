import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillServiceService } from 'src/app/servicios/skill-service.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = {
    id: undefined,
    titulo: '',
    porcentaje: 0,
    innerColor: '',
    outerColor: '',

  };

  constructor(
    private skillService: SkillServiceService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.encuentraSkillId(id).subscribe(
      (data) => {
        this.skill = data;
      },
      (err) => {
        alert('No se encontró el Skill');
        this.router.navigate(['skills']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.editarSkill(id, this.skill).subscribe(
      (data) => {
        alert('El skill fue editado')
        this.router.navigate(['skills']);
      },
      (err) => {
        alert('No se pudo editar Skill');
        this.router.navigate(['skills']);
      }
    );
  }
}


/*Oficial ultimamente
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
    id: undefined,
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
      }
    )
    this.activatedRouter.snapshot.params['id'];
    this.skillService.editarSkill(id, this.skill).subscribe(
      data => {
        this.router.navigate(['skills']);
      }, err => {
        alert("No se pudo editar Skill");
        this.router.navigate(['skills']);

      }
    )
  }
  */

/*Numero 2
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        const numericId = Number(id); //Convertir a número 
        this.skillService.encuentraSkillId(numericId).subscribe(
          data => {
            this.skill = data;
          },
          error => {
            console.error('Error al obtener el Skill:', error);
            //Aquí se puede manejar el error según las necesidades
          }
        );
      } else {
        console.error('ID no presente en la URL');
        //Aquí se puede manejar la falta de ID según las necesidades
      }
    });
  }
 
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if (id) {
      this.skillService.editarSkill(Number(id), this.skill).subscribe(
        data => {
          this.router.navigate(['skills']);
        },
        error => {
          console.error('Error al editar la Skill:', error);
          //Aquí se puede manejar el error según las necesidades
        }
      );
    } else {
      console.error('Id no presente en la URL');
      //Aqui se puede manejar la falta de ID según necesidad
    }
  }
*/

