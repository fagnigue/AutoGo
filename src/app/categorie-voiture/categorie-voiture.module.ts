import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorieVoiturePageRoutingModule } from './categorie-voiture-routing.module';

import { CategorieVoiturePage } from './categorie-voiture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorieVoiturePageRoutingModule
  ],
  declarations: [CategorieVoiturePage]
})
export class CategorieVoiturePageModule {}
