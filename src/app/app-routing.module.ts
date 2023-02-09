import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/1index/index.component';
import { ErrorComponent } from './components/error/error.component';
import { AcercademiEditComponent } from './modals/acercademi-edit/acercademi-edit.component';
import { BannnerEditComponent } from './modals/bannner-edit/bannner-edit.component';
import { EstudiosEditComponent } from './modals/estudios-edit/estudios-edit.component';
import { ExperienciaEditComponent } from './modals/experiencia-edit/experiencia-edit/experiencia-edit.component';
import { NombrefraseEditComponent } from './modals/nombrefrase-edit/nombrefrase-edit.component';
import { PerfilEditComponent } from './modals/perfil-edit/perfil-edit.component';
import { ProyectosEditComponent } from './modals/proyectos-edit/proyectos-edit.component';
import { SkillsEditComponent } from './modals/skills-edit/skills-edit.component';
import { GuardGuard } from './servicio/guard.guard';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'editPerfil/:id', canActivate:[GuardGuard], component: PerfilEditComponent},
  {path: 'editNombrefrase/:id', canActivate:[GuardGuard], component: NombrefraseEditComponent},
  {path: 'editBanner/:id', canActivate:[GuardGuard], component: BannnerEditComponent},
  {path: 'editAcercademi/:id', canActivate:[GuardGuard], component: AcercademiEditComponent},
  {path: 'editExperiencia/:id', canActivate: [GuardGuard],  component: ExperienciaEditComponent},
  {path: 'editEstudios/:id', canActivate: [GuardGuard], component: EstudiosEditComponent},
  {path: 'editSkills/:id', canActivate: [GuardGuard], component: SkillsEditComponent},
  {path: 'editProyectos/:id', canActivate: [GuardGuard], component: ProyectosEditComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
