import { Component, OnInit } from '@angular/core';

import { InfoService } from '../info.service';

import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { Router } from "@angular/router";

import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

	public reserve: FormGroup;

  constructor(
  	public fb: FormBuilder,
    public data: InfoService,
    public route: Router,
    public alert: AlertController
  ) {}

  ngOnInit() {

  	this.initforms();
  	this.data.reservation;

  }

  initforms(){
  	this.reserve = this.fb.group({
  		"delai": ["", Validators.required],
      	"chauffeur": ["", Validators.required],
      	"paiement": ["", Validators.required],
  	})
  }

  reserver(){

  	const res = this.reserve.value

  	this.data.reservation["delai"] = res["delai"];

  	this.data.reservation["chauffeur"] = res["chauffeur"];

  	this.data.reservation["paiement"] = res["paiement"];

  }


  

}
