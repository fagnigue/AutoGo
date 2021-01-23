import { Component, OnInit } from '@angular/core';

import { InfoService } from '../info.service';

import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { Router,ActivatedRoute } from "@angular/router";

import { AlertController, ToastController } from "@ionic/angular";
import { ApiService } from './../service/api.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  public reserve: FormGroup;
  public driver:any;

  constructor(
  	public fb: FormBuilder,
    public data: InfoService,
    public route: Router,
    public alert: AlertController,
    public api:ApiService,
    public active:ActivatedRoute,
    public toast:ToastController
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
    const card_id=this.active.snapshot.params["card_id"];
    const clt_numero=this.active.snapshot.params["numero"];


    if(res.chauffeur=="oui"){
      this.driver=1;
    }else{
      this.driver=0;
    }
    
    const data={

      "delai":res.delai,
      "chauffeur":this.driver,
      "paiement":res.paiement,
      "id_voiture":card_id,
      "id_client":clt_numero

    };

    this.api.Reserver(data).subscribe((u)=>{
      console.log(u);
      this.toastShower("Félicitations votre demande à été prise en compte",4000,"success").then((u)=>u.present());
      this.route.navigate(['/categorie-voiture',{id:clt_numero,reservation:true}]);
    });

  	this.data.reservation["delai"] = res["delai"];

  	this.data.reservation["chauffeur"] = res["chauffeur"];

  	this.data.reservation["paiement"] = res["paiement"];

    console.log(this.data.reservation);

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
