import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'http://localhost:8080/Persona/';

  constructor(private http: HttpClient) { }

  public verPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL + 'ver/perfil');
  }
}


/*implementacion del back y base de datos en el front,mgb*/
