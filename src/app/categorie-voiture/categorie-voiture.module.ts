import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { CategorieVoiturePageRoutingModule } from './categorie-voiture-routing.module';

import { CategorieVoiturePage } from './categorie-voiture.page';
import { ApiService } from './../service/api.service';

@NgModule({
  imports: [
  
  HttpClientModule,
  CommonModule,
    FormsModule,
    IonicModule,
    CategorieVoiturePageRoutingModule
  ],
  declarations: [CategorieVoiturePage],
  providers:[ApiService]
})
export class CategorieVoiturePageModule {}
