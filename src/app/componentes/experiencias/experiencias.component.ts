import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experienciasList: any;
  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.experienciasList = data.experiencias;
    });
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