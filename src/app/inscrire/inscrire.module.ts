import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ApiService } from './../service/api.service';
import { InscrirePageRoutingModule } from './inscrire-routing.module';

import { InscrirePage } from './inscrire.page';

@NgModule({
  imports: [
  

  CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    IonicModule,
    HttpClientModule,
    InscrirePageRoutingModule
  ],
  declarations: [InscrirePage],
  providers:[ApiService]
})
export class InscrirePageModule {}
