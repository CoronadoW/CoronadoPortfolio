import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionServiceService {

  eduUrl = 'http://localhost:8080/educacion/'

  constructor(private httpClient: HttpClient) { }

  public listaEducacion(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.eduUrl + 'listaEducacion');
  }

  public traeId(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.eduUrl + `traeId/${id}`);
  }

  public borrarId(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.eduUrl + `borrarId/${id}`);
  }

  public crearEducacion(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.eduUrl + 'crearEducacion', educacion);
  }

  public editarId(id: number, educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.eduUrl + `editarId/${id}`, educacion);
  }

}