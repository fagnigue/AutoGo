import { Component, OnInit } from '@angular/core';

import { InfoService } from '../info.service';

import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { Router } from "@angular/router";
import { ApiService } from '../service/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.page.html',
  styleUrls: ['./inscrire.page.scss'],
})
export class InscrirePage implements OnInit {


  public sign: FormGroup;
  public responce:any;

  constructor(
  	public fb: FormBuilder,
    public data: InfoService,
    public route: Router,
    public api:ApiService,
    public toast:ToastController
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
      "num_telephone": ["", Validators.required],
      "proffession": ["", Validators.required],
      "ville": ["", Validators.required],
      "psswd": ["", Validators.required]
    });
  }

  signin() {



    const datas= this.sign.value;
    console.log(datas.nom);
    if(datas.nom!="" && datas.prenom!="" && datas.num_telephone!="" && datas.proffession!="" && datas.psswd!="" && datas.ville!=""){

      this.api.PostData(datas).subscribe((responce:any)=>{
          this.responce=responce;
          console.log(this.responce);
          if(this.responce.message==true){
            this.toastShower("Votre inscription à bien été faite",1000,"primary").then((u)=>u.present());
            this.route.navigate(['/']);
            
          }else{
            this.toastShower("Veuillez verifier vos données",1000,"danger").then((u)=>u.present());
          }
          
        }) 

  }else{

    this.toastShower("merci de verifier les données saisie",1000,"danger").then((u)=>{u.present()});

  }

    
  }


  async toastShower(message,duration,color){

   
    return this.toast.create({

            message:message,
            duration:duration,
            color:color,
            position:"top",
    });
  

}


}
