import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Funcionalidad3PageRoutingModule } from './funcionalidad3-routing.module';

import { Funcionalidad3Page } from './funcionalidad3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Funcionalidad3PageRoutingModule
  ],
  declarations: [Funcionalidad3Page]
})
export class Funcionalidad3PageModule {}
