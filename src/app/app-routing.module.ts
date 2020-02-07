import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequisitosComponent } from './modules/requisitos/requisitos.component';
import { HomeComponent } from './modules/home/home.component';
import { GitComponent } from './modules/git/git.component';
import { IisComponent } from './modules/iis/iis.component';
import { DespliegueComponent } from './modules/despliegue/despliegue.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { QuioscoComponent } from './modules/quiosco/quiosco.component';
import { LevantarNavegadorComponent } from './modules/levantar-navegador/levantar-navegador.component';
import { FuncionalidadMasvidaComponent } from './modules/funcionalidad-masvida/funcionalidad-masvida.component';
import { ReporteUsabilidadComponent } from './modules/reporte-usabilidad/reporte-usabilidad.component';


const routes: Routes = [
  { path: 'home',                   component: HomeComponent              },
  { path: 'requisitos',             component: RequisitosComponent        },
  { path: 'git',                    component: GitComponent               },
  { path: 'iis',                    component: IisComponent               },
  { path: 'despliegue',             component: DespliegueComponent        },
  { path: 'servicios',              component: ServiciosComponent         },
  { path: 'quiosco',                component: QuioscoComponent           },
  { path: 'levantar-navegador',     component: LevantarNavegadorComponent },
  { path: 'funcionalidad-masvida',  component: FuncionalidadMasvidaComponent      },
  { path: 'reporte-usabilidad',     component: ReporteUsabilidadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
