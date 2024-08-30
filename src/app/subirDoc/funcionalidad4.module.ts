import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Funcionalidad4PageRoutingModule } from './funcionalidad4-routing.module';

import { Funcionalidad4Page } from './funcionalidad4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Funcionalidad4PageRoutingModule
  ],
  declarations: [Funcionalidad4Page]
})
export class Funcionalidad4PageModule {}
