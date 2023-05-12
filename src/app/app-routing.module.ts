import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { RegisterComponent } from './componentes/register/register.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

/*para bloquear ciertas rutas si estamos logueados con firebase o no importamos canActivate, y de esta manera si no estamos registrados nos mandara al componente que se le indique
para poder ir de un componente a otro y navegar en la misma pagina importamos el Router.
En teoria para luego de loggearse redirigir al componente "portfolio"...canActivate(() => redirectLoggedInTo(['/portfolio'])) */
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'portfolio', component: PortfolioComponent, ...canActivate(() => redirectUnauthorizedTo(['/inicio'])) },
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
