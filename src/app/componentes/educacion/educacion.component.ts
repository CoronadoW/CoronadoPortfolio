import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/servicios/educacion-service.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})


export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(private educacionService: EducacionServiceService, private auth: Auth, private router: Router) { }

  isLogged = false;

  ngOnInit(): void {
    this.showEducacion();
    if (this.auth.currentUser) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  showEducacion() {
    this.educacionService.listaEducacion().subscribe(data => { this.educacion = data; })
  }

  deleteEducacion(id?: number) {
    if (id != undefined) {
      this.educacionService.borrarId(id).subscribe(
        data => {
          this.showEducacion();
        }, err => {
          alert("No se borró la experiencia");
        }
      )
    }
  }

}

//A continuacion EducacionComponent como estaba en principio,sirviendose del portfolioService, antes de crear el back.
//export class EducacionComponent implements OnInit {
//educacionList: any;


//constructor(private datosPortfolio: PortfolioService) { }

//ngOnInit(): void {
//this.datosPortfolio.obtenerDatos().subscribe(data => {
//console.log(data);
//this.educacionList = data.educacion;
//});
//}