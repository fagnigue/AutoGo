import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from "@angular/router";


import { ApiService } from './../service/api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public connecter: FormGroup;

  public  data:any={
    
      nom:"wilfried",
      prenom:"elvire",
      num_telephone:"03659060",
      ville:"abidjan",
      email:"elvirekoua2000@gmail.com",
     

    }
   
    
   

  constructor( public fb: FormBuilder, public route: Router,public api:ApiService) {


    /*this.api.PostData(this.data).subscribe((data:any)=>{
      console.log(data);
    }); */

    
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
