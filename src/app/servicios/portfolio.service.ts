
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private http: HttpClient) { }
  obtenerDatos(): Observable<any> {
    return this.http.get('./assets/data/data.json')
  };
}

/* Servicios.
  Para crear el servicio que despues consumiran los componentes
  1° Creo el metodo obtenerDatos(console.log(esta corriendo) que en pasos adelante cambiare por el metodo get), 
  acto seguido lo inyecto en el archivo ts del componente  */

/*Http
<<app.module.ts
 Ahora trabajamos el servicio para poder hacer las peticiones http
Como queremos obtener los datos, el metodo a usar sera el get
3°Inyectamos en el constructor el metodo client y el import{HttpClient} se suma automaticamente
4°Definimos la funcion o metodo como Observable<any>(asincronicidad), el import{Observable}...se agrega automaticamente.
5°Cambiamos el console.log que habia por el metodo get
Ahora vamos al ts del componente y nos suscribimos >>experiencias.component.ts*/