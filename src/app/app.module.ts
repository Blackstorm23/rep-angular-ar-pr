import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/1index/index.component';
import { ErrorComponent } from './components/error/error.component';
import { ExperienciaComponent } from './components/4experiencia/experiencia.component';
import { PerfilComponent } from './components/3perfil/perfil.component';
import { PerfilEditComponent } from './modals/perfil-edit/perfil-edit.component';
import { NavbarComponent } from './components/2navbarindex/navbar.component';
import { EstudiosComponent } from './components/5estudios/estudios.component';
import { EstudiosEditComponent } from './modals/estudios-edit/estudios-edit.component';
import { SkillsComponent } from './components/6skills/skills.component';
import { SkillsEditComponent } from './modals/skills-edit/skills-edit.component';
import { ProyectosComponent } from './components/7proyectos/proyectos.component';
import { ProyectosEditComponent } from './modals/proyectos-edit/proyectos-edit.component';
import { LoginComponent } from './components/3menu/button-login/modal-login/login.component';
import { ButtonLoginComponent } from './components/3menu/button-login/button-login.component';
import { ButtonLoginoutComponent } from './components/3menu/button-loginout/button-loginout.component';
import { RedesComponent } from './components/redes/redes.component';
import { FooterComponent } from './components/footer/footer.component';
import { PorfolioService } from './servicio/porfolio.service';
import { RecuperarcontraComponent } from './components/3menu/recuperarcontra/recuperarcontra.component';
import { interceptorProvider } from './servicio/interceptor-service';
import { EstudiosAddComponent } from './modals/estudios-add/estudios-add/estudios-add.component';
import { ProyectosAddComponent } from './modals/proyectos-add/proyectos-add/proyectos-add.component';
import { SkillsAddComponent } from './modals/skills-add/skills-add/skills-add.component';
import { ExperienciaAddComponent } from './modals/experiencia-add/experiencia-add/experiencia-add.component';
import { ExperienciaEditComponent } from './modals/experiencia-edit/experiencia-edit/experiencia-edit.component';
import { BannnerEditComponent } from './modals/bannner-edit/bannner-edit.component';
import { NombrefraseEditComponent } from './modals/nombrefrase-edit/nombrefrase-edit.component';
import { AcercademiEditComponent } from './modals/acercademi-edit/acercademi-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ExperienciaComponent,
    PerfilComponent,
    PerfilEditComponent,
    NavbarComponent,
    EstudiosComponent,
    EstudiosEditComponent,
    SkillsComponent,
    SkillsEditComponent,
    ProyectosComponent,
    ProyectosEditComponent,
    ButtonLoginComponent,
    ButtonLoginoutComponent,
    RedesComponent,
    ErrorComponent,
    LoginComponent,
    FooterComponent,
    RecuperarcontraComponent,
    EstudiosAddComponent,
    ProyectosAddComponent,
    SkillsAddComponent,
    ExperienciaAddComponent,
    ExperienciaEditComponent,
    BannnerEditComponent,
    NombrefraseEditComponent,
    AcercademiEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PorfolioService,
  interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
