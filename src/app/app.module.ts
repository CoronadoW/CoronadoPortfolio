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
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
