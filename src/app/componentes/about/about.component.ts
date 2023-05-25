import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona: persona = new persona("", "", "");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.verPersona().subscribe(data => { this.persona = data })
  }

}

/* Implementacion del back en el front:
le digo al componente about que me cree el objeto persona de tipo persona, con los parametros vacion para "nombre","titulo" e "img"
el constructor llama al servicio (persona.service.ts)
en el ngOninit le digo que este(this) persona.service se suscriba y me traiga la data, lo que este en persona se va a guardar en data. 
El subscribe es un metodo siempre esta al pendiente que el observable hace un cambio, conecta el observable con algunos eventos observables, entonces detecta un cambio , ejecuta un codigo y provoca una respuesta x.
ahora voy al html del componente
*/
