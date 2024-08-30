// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'funcionalidad1', loadChildren: () => import('./subirImg/funcionalidad1.module').then( m => m.Funcionalidad1PageModule) },
  { path: 'funcionalidad2', loadChildren: () => import('./subirPdf/funcionalidad2.module').then( m => m.Funcionalidad2PageModule) },
  { path: 'funcionalidad3', loadChildren: () => import('./subirLink/funcionalidad3.module').then( m => m.Funcionalidad3PageModule) },
  { path: 'funcionalidad4', loadChildren: () => import('./subirDoc/funcionalidad4.module').then( m => m.Funcionalidad4PageModule) },
  {
    path: 'subirImg',
    loadChildren: () => import('./subirImg/funcionalidad1.module').then( m => m.Funcionalidad1PageModule)
  },
  {
    path: 'subirPdf',
    loadChildren: () => import('./subirPdf/funcionalidad2.module').then( m => m.Funcionalidad2PageModule)
  },
  {
    path: 'subirLink',
    loadChildren: () => import('./subirLink/funcionalidad3.module').then( m => m.Funcionalidad3PageModule)
  },
  {
    path: 'subirDoc',
    loadChildren: () => import('./subirDoc/funcionalidad4.module').then( m => m.Funcionalidad4PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
