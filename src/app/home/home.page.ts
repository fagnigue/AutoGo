import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public connecter: FormGroup;

  constructor( public fb: FormBuilder, public route: Router) {

  	this.connecter = this.fb.group({
  		"contact": ["", Validators.required],
  		"password": ["", Validators.required]
  	})

  }


  login() {
  	const datas= this.connecter.value;
    console.log(datas);

    this.route.navigate(['categorie-voiture']);
  }


}
