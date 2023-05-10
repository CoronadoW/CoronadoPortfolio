import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { RegisterComponent } from './componentes/register/register.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'experiencias', component: ExperienciasComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'portfolio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
