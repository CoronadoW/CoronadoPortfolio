import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { RegisterComponent } from './componentes/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { NewExperienciaComponent } from './componentes/experiencias/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencias/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewSkillComponent } from './componentes/skills/new-skill.component';
import { EditSkillComponent } from './componentes/skills/edit-skill.component';
import { SoftSkillComponent } from './componentes/soft-skill/soft-skill.component';
/*para bloquear ciertas rutas si estamos logueados con firebase o no importamos canActivate, y de esta manera si no estamos registrados nos mandara al componente que se le indique
para poder ir de un componente a otro y navegar en la misma pagina importamos el Router.
En teoria para luego de loggearse redirigir al componente "portfolio"...canActivate(() => redirectLoggedInTo(['/portfolio'])) */
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'portfolio', component: PortfolioComponent, ...canActivate(() => redirectUnauthorizedTo(['/register'])) },
  { path: 'experiencias', component: ExperienciasComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'newExperiencia', component: NewExperienciaComponent },
  { path: 'editExperiencia', component: EditExperienciaComponent },
  { path: 'newEducacion', component: NewEducacionComponent },
  { path: 'editEducacion', component: EditEducacionComponent },
  { path: 'newSkill', component: NewSkillComponent },
  { path: 'editSkill', component: EditSkillComponent },
  { path: 'softSkill', component: SoftSkillComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
