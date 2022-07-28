import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComoEstamosHomeComponent } from './pages/como-estamos-home/como-estamos-home.component';
import { CuantoNoLlueveComponent } from './pages/cuanto-no-llueve/cuanto-no-llueve.component';
import { EstacionesSequiaComponent } from './pages/estaciones-sequia/estaciones-sequia.component';
import { EstacionesLlovioComponent } from './pages/estaciones-llovio/estaciones-llovio.component';
import { ZonasSequiaComponent } from './pages/zonas-sequia/zonas-sequia.component';
import { ZonasLlovioComponent } from './pages/zonas-llovio/zonas-llovio.component';
import { AreaEnSequiaComponent } from './pages/area-en-sequia/area-en-sequia.component';
import { ComparacionPeriodosComponent } from './pages/comparacion-periodos/comparacion-periodos.component';
import { EvolucionPeriodosComponent } from './pages/evolucion-periodos/evolucion-periodos.component';
import { ComoEstamosNavComponent } from './share/como-estamos-nav/como-estamos-nav.component';
import { ComoEstamosPopupComponent } from './share/como-estamos-popup/como-estamos-popup.component';
import { ComoEstamosRoutingModule } from './como-estamos-routing.module';
import { ControlesAreaEnSequiaComponent } from './pages/area-en-sequia/components/controles-area-en-sequia/controles-area-en-sequia.component';
import { MapaAreaEnSequiaComponent } from './pages/area-en-sequia/components/mapa-area-en-sequia/mapa-area-en-sequia.component';
import { TablaAreaEnSequiaComponent } from './pages/area-en-sequia/components/tabla-area-en-sequia/tabla-area-en-sequia.component';
import { GraficoAreaEnSequiaComponent } from './pages/area-en-sequia/components/grafico-area-en-sequia/grafico-area-en-sequia.component';



@NgModule({
  declarations: [
    ComoEstamosHomeComponent,
    CuantoNoLlueveComponent,
    EstacionesSequiaComponent,
    EstacionesLlovioComponent,
    ZonasSequiaComponent,
    ZonasLlovioComponent,
    AreaEnSequiaComponent,
    ComparacionPeriodosComponent,
    EvolucionPeriodosComponent,
    ComoEstamosNavComponent,
    ComoEstamosPopupComponent,
    ControlesAreaEnSequiaComponent,
    MapaAreaEnSequiaComponent,
    TablaAreaEnSequiaComponent,
    GraficoAreaEnSequiaComponent
  ],
  imports: [
    CommonModule,
    ComoEstamosRoutingModule
  ]
})
export class ComoEstamosModule { }
