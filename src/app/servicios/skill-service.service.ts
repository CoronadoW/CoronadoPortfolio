import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {

  skillUrl = 'https://coronadobackservice.onrender.com/skill/'
  constructor(private httpClient: HttpClient) { }

  public listaSkill(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.skillUrl + 'listaSkill');
  }

  public encuentraSkillId(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.skillUrl + `encuentraSkillId/${id}`);
  }

  public borrarSkill(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.skillUrl + `borrarSkill/${id}`);
  }

  public crearSkill(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.skillUrl + 'crearSkill', skill);
  }

  public editarSkill(id: number, skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.skillUrl + `editarSkill/${id}`, skill);
  }
}

