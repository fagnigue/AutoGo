import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './../service/api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-categorie-voiture',
  templateUrl: './categorie-voiture.page.html',
  styleUrls: ['./categorie-voiture.page.scss'],
})
export class CategorieVoiturePage implements OnInit {


	evenements: any = 4;
	affaire: any = 2;
	balade:any = 3;
	vacances: any = 5; 
  id:any;
  res:any;
  numero:any;
  data:any;
  car_info:any;
  isConn:boolean;
  constructor(public alert:AlertController,public active:ActivatedRoute,public route: Router,public api:ApiService) { }

  ngOnInit() {
    this.res=this.active.snapshot.params["reservation"];
    this.numero=this.active.snapshot.params["id"];
    
    
  
  }


  finder(id){

    this.id=this.active.snapshot.params["id"];
    
    this.route.navigate(["/voiture",{id:id,numero:this.id}]);
    
  }



  print(){

    this.api.getRerservationInfoByNumber(this.numero).subscribe((u)=> {
      
         this.data=u;

         this.api.CarFinder(this.data.id_voiture).subscribe((u)=> {
           
          
           this.car_info=u;


           this.presentAlert(this.data.chauffeur,this.data.delai,this.car_info.nom,this.car_info.modele,Number(this.car_info.Prix_location)*Number(this.data.delai),this.data.paiement);
        
        
        
        });
         


  });


  }


  reload(evenement){

    setTimeout(()=>{
 
     evenement.target.complete();
     this.isConn=false;
     
 
    },1000);
 
  }
 




  async presentAlert(chauffeur,delai,nom,modele,prix,paiement) {
    if(chauffeur==1){
      chauffeur="oui"
    }else{
      chauffeur="non"
    }
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Reservation',
      
      message: `Voiture :${nom},Modele: ${modele}   , prix :${prix} FCFA , delai: ${delai} Jours , chauffeur : ${chauffeur} , paiement:${paiement}   `,
      buttons: ['OK']
    });

    await alert.present();
  }


  


  






  



}
