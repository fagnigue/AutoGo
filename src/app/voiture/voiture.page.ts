import { Component, OnInit } from '@angular/core';

import { InfoService } from '../info.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../service/api.service';
import { ToastController } from '@ionic/angular';




@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.page.html',
  styleUrls: ['./voiture.page.scss'],
})
export class VoiturePage implements OnInit {

  public id: any;
  public data;
  public numero;
  index: any = '';
  isConn:boolean;

  constructor(public toast:ToastController,public api:ApiService,public categorie: InfoService, public route: Router,public active:ActivatedRoute) { }

  ngOnInit() {

  this.numero=this.active.snapshot.params["numero"];

  if(this.numero!=undefined){

    this.id=this.active.snapshot.params["id"];

    
    this.api.CategorieFinder(Number(this.id)).subscribe((responce)=>{
      
      this.data=responce;
    
    });

}else{

  this.toastShower("merci de vous reconnecter",2000,"danger").then((u)=>u.present());
}
 

  }

  redirect(index: any) {

   
    this.numero=this.active.snapshot.params["numero"];

    if(this.numero!=undefined){

      this.route.navigate(['/reservation',{card_id:index,numero:this.numero}]);

    }else{

      this.toastShower("merci de vous reconnecter",2000,"danger").then((u)=>u.present());
      this.route.navigate(['/']);
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
   this.api.CategorieFinder(Number(this.id)).subscribe((responce)=>{
    this.data=responce;
  });
   this.isConn=false;
   

  },1000);

}
  

}
