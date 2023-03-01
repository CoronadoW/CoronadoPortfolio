import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-logo-arg-pro',
  templateUrl: './logo-arg-pro.component.html',
  styleUrls: ['./logo-arg-pro.component.css']
})
export class LogoArgProComponent implements OnInit {
  miPortfolio: any;
  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio = data;
    })
  }

}
