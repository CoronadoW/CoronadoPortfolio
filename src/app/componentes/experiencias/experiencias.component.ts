import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/servicios/experiencia-service.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { UserService } from 'src/app/servicios/user.service';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})


export class ExperienciasComponent implements OnInit {
  experiencia: Experiencia[] = [];


  constructor(private experienciaService: ExperienciaServiceService, private Auth: Auth, private router: Router) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.Auth.currentUser) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia() {
    this.experienciaService.lista().subscribe(data => { this.experiencia = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.experienciaService.delete(id).subscribe(
        data => {
          alert("Se borró Experiencia con id " + (id))
          this.cargarExperiencia();
        }, err => {
          alert("No se borró la experiencia");
        }
      )
    }
  }
}



/*Servicio
2° Ahora inyecto el servicio en el constructor del archivo ts del componente 
3° Agregamos el metodo "obtenerDatos" antes declarado para poder acceder desde ng on init
Ahora ya se puede ver el console.log por consola
Acto seguido se crean las llamadas http para obtener los recursos y completar los datos de forma dinamica y no hardcoded
>>app.module.ts*/

/*Http
<<portfolio.service.ts
6°Ahora nos suscribimos(subscribe...)  y ahora en consola aparecera el archivo json
y ya tenemos los datos del componente*/

/*DataBinding-Interpolacion,
sustituir una expresion por un valor en cadena en el template
Ahora despues del paso 6
1°Definimos una variable llamada miPortfolio:any en el export class y 
 definimos el this.miPortfolio=data; en el ngOninit.
 */