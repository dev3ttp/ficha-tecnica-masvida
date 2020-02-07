import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { RequisitosComponent } from './modules/requisitos/requisitos.component';
import { GitComponent } from './modules/git/git.component';
import { IisComponent } from './modules/iis/iis.component';
import { DespliegueComponent } from './modules/despliegue/despliegue.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { QuioscoComponent } from './modules/quiosco/quiosco.component';
import { LevantarNavegadorComponent } from './modules/levantar-navegador/levantar-navegador.component';
import { HomeComponent } from './modules/home/home.component';
import { FuncionalidadMasvidaComponent } from './modules/funcionalidad-masvida/funcionalidad-masvida.component';
import { ReporteUsabilidadComponent } from './modules/reporte-usabilidad/reporte-usabilidad.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RequisitosComponent,
    GitComponent,
    IisComponent,
    DespliegueComponent,
    ServiciosComponent,
    QuioscoComponent,
    LevantarNavegadorComponent,
    HomeComponent,
    FuncionalidadMasvidaComponent,
    ReporteUsabilidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
