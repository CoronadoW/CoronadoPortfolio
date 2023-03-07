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
