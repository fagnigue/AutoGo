import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from "@angular/router";


import { ApiService } from './../service/api.service';
import { ToastController } from '@ionic/angular';
import { report } from 'process';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public connecter: FormGroup;
  public isConn:boolean;

  public datas;
  


    
   

  constructor( public fb: FormBuilder, public route: Router,public api:ApiService,public toast:ToastController) {


    

    
      this.connecter = this.fb.group({
  		"contact": ["", Validators.required],
  		"password": ["", Validators.required]
    })
    
    

  }


  login() {

     this.datas= this.connecter.value;
    if(this.datas.contact!="" && this.datas.password!=""){
    
        this.api.auth(this.datas.contact,this.datas.password).subscribe((responce:any)=>{
              
          if(responce.data==null){

            this.toastShower("Erreur au niveau de vos informations",1000,"danger").then((u)=>{u.present()});
          }else{
            
            this.toastShower("connection etablie avec succès",1000,"primary").then((u)=>{u.present()});
            this.route.navigate(['categorie-voiture',{id:responce.data.num_telephone}]);
           

          }

      },(error)=>{

        this.toastShower("Problème lors de la connection",1000,"danger").then((u)=>{u.present()});
           
      })
    }
    else{
      this.toastShower("merci de renseigner tout vos  champs",1000,"danger").then((u)=>{u.present()});
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



reload(evenement){

  setTimeout(()=>{

      evenement.target.complete();

        this.api.getClientData().subscribe((u)=>{

          console.log(u);

        },(error:any)=>{

          this.toastShower("Problème lors de la connection",1000,"danger").then((u)=>{u.present()});
        });
   
        this.isConn=false;
   

  },1000);

}



}
