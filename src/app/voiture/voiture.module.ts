import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { VoiturePageRoutingModule } from './voiture-routing.module';

import { VoiturePage } from './voiture.page';

import { ApiService } from './../service/api.service';


@NgModule({
  imports: [
  
  CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    VoiturePageRoutingModule
  ],
  declarations: [VoiturePage],
  providers:[ApiService]
})
export class VoiturePageModule {}
