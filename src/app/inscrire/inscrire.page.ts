import { Component, OnInit } from '@angular/core';

import { InfoService } from '../info.service';

import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { Router } from "@angular/router";

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.page.html',
  styleUrls: ['./inscrire.page.scss'],
})
export class InscrirePage implements OnInit {


	public sign: FormGroup;

  constructor(
  	public fb: FormBuilder,
    public data: InfoService,
    public route: Router
  ) {}

  ngOnInit() {
  	this.initForm();
    this.data.client;
  }

  //initialiser les données du formulaire

  initForm() {
    this.sign = this.fb.group({
      "nom": ["", Validators.required],
      "prenom": ["", Validators.required],
      "email": ["", Validators.required],
      "contact": ["", Validators.required],
      "profession": ["", Validators.required],
      "city": ["", Validators.required],
      "password": ["", Validators.required]
    });
  }

  signin() {

    const datas= this.sign.value;
    console.log(datas);

    this.route.navigate(['/']);
  }


}
