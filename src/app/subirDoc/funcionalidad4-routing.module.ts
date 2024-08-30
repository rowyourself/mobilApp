import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Funcionalidad4Page } from './funcionalidad4.page';

const routes: Routes = [
  {
    path: '',
    component: Funcionalidad4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Funcionalidad4PageRoutingModule {}
