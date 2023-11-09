import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SoftSkill } from '../model/softSkill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillService {

  softSkillUrl = 'http://localhost:8080/softSkill/'

  constructor(private httpClient: HttpClient) { }

  public listaSoft(): Observable<SoftSkill[]> {
    return this.httpClient.get<SoftSkill[]>(this.softSkillUrl + 'listaSoft');
  }

  public encuentraSoftSkillId(id: number): Observable<SoftSkill> {
    return this.httpClient.get<SoftSkill>(this.softSkillUrl + `encuentraSkillId/${id}`);
  }

  public borrarSoftSkill(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.softSkillUrl + `borrarSoftSkill/${id}`);
  }

  public salvarSoftSkill(softSkill: SoftSkill): Observable<any> {
    return this.httpClient.post<any>(this.softSkillUrl + 'salvarSoftSkill', softSkill);
  }

  public editarSoftSkill(id: number, softSkill: SoftSkill): Observable<any> {
    return this.httpClient.put<any>(this.softSkillUrl + `editarSoftSkill/${id}`, softSkill);
  }
}
