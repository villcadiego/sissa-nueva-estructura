import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuantoNoLlueveComponent } from './pages/cuanto-no-llueve/cuanto-no-llueve.component';
import { EstacionesSequiaComponent } from './pages/estaciones-sequia/estaciones-sequia.component';
import { EstacionesLlovioComponent } from './pages/estaciones-llovio/estaciones-llovio.component';
import { ZonasSequiaComponent } from './pages/zonas-sequia/zonas-sequia.component';
import { ZonasLlovioComponent } from './pages/zonas-llovio/zonas-llovio.component';
import { AreaEnSequiaComponent } from './pages/area-en-sequia/area-en-sequia.component';
import { ComparacionPeriodosComponent } from './pages/comparacion-periodos/comparacion-periodos.component';
import { EvolucionPeriodosComponent } from './pages/evolucion-periodos/evolucion-periodos.component';
import { ComoEstamosHomeComponent } from './pages/como-estamos-home/como-estamos-home.component';

const routes: Routes = [
  { 
    path:'',
    component:ComoEstamosHomeComponent,
    children:[
      {
        path: 'cuanto-no-llueve',
        component: CuantoNoLlueveComponent
      },
      {
        path: 'estaciones-sequia',
        component: EstacionesSequiaComponent
      },
      {
        path: 'estaciones-llovio',
        component: EstacionesLlovioComponent
      },
      {
        path: 'zonas-sequia',
        component: ZonasSequiaComponent
      },
      {
        path: 'zonas-llovio',
        component: ZonasLlovioComponent
      },
      {
        path: 'area-en-sequia',
        component: AreaEnSequiaComponent
      },
      {
        path: 'comparacion-periodos',
        component: ComparacionPeriodosComponent
      },
      {
        path: 'evoluacion-periodos',
        component:EvolucionPeriodosComponent
      },
      {
        path: '**',
        redirectTo: 'cuanto-no-llueve'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComoEstamosRoutingModule { }
