import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './share/menu/menu.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'como-estamos',
    loadChildren: () => 
    import('./sissa/como-estamos/como-estamos.module').then(m => m.ComoEstamosModule)
  },
  {
    path: 'indices-de-sequia',
    loadChildren: () => 
    import('./sissa/indices-de-sequia/indices-de-sequia.module').then(m => m.IndicesDeSequiaModule)
  },
  {
    path: 'chirps',
    loadChildren: () => 
    import('./sissa/chirps/chirps.module').then(m => m.ChirpsModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
