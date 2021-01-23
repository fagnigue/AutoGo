import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

import { ReservationPageRoutingModule } from './reservation-routing.module';
import { ApiService } from './../service/api.service';

import { ReservationPage } from './reservation.page';

@NgModule({
  imports: [
 
  CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    IonicModule,
    ReservationPageRoutingModule
  ],
  declarations: [ReservationPage],
  providers:[ApiService]
})
export class ReservationPageModule {}
