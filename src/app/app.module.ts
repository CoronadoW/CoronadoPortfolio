/*Http
Se hacen las llamadas http para obtener los recursos y completar los datos de forma dinamica y no hardcoded
1° Se hace el import{HttpClientModule}... y 2° tambien especificamos el HttpClientModule en los imports
Ahora se trabaja el >>portfolio.service.ts*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoArgProComponent } from './componentes/logo-arg-pro/logo-arg-pro.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AboutComponent } from './componentes/about/about.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { RegisterComponent } from './componentes/register/register.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './componentes/experiencias/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencias/edit-experiencia.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgProComponent,
    RedesComponent,
    BannerComponent,
    AboutComponent,
    NavbarComponent,
    ExperienciasComponent,
    SkillsComponent,
    EducacionComponent,
    FooterComponent,
    InicioComponent,
    PortfolioComponent,
    RegisterComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
