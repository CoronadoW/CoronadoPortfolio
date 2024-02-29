import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaServiceService {

  expUrl = 'https://coronadobackservice.onrender.com/experiencia/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expUrl + 'lista');
  }

  public traeme(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.expUrl + `traeme/${id}`);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expUrl + `delete/${id}`);
  }

  public create(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.expUrl + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.expUrl + `update/${id}`, experiencia);
  }


}
