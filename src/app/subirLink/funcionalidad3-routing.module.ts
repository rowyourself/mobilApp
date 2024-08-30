import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Funcionalidad3Page } from './funcionalidad3.page';

const routes: Routes = [
  {
    path: '',
    component: Funcionalidad3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Funcionalidad3PageRoutingModule {}
