import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscrirePageRoutingModule } from './inscrire-routing.module';

import { InscrirePage } from './inscrire.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    IonicModule,
    InscrirePageRoutingModule
  ],
  declarations: [InscrirePage]
})
export class InscrirePageModule {}
