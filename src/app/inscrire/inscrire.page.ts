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
   
    this.data.client["nom"] = datas["nom"];

    this.data.client["prenom"] = datas["prenom"];

    this.data.client["email"] = datas["email"];

    this.data.client["contact"] = datas["contact"];

    this.data.client["profession"] = datas["profession"];

    this.data.client["city"] = datas["ctiy"];

    this.data.client["password"] = datas["password"];

     console.log(this.data.client);

    this.route.navigate(['/']);
  }


}
