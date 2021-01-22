import { Component, OnInit } from '@angular/core';

import { InfoService } from '../info.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../service/api.service';




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

  constructor(public api:ApiService,public categorie: InfoService, public route: Router,public active:ActivatedRoute) { }

  ngOnInit() {

  this.id=this.active.snapshot.params["id"];

  
  this.api.CategorieFinder(Number(this.id)).subscribe((responce)=>{
    
    this.data=responce;
   
  });
 

  }

  redirect(index: any) {

   
    this.numero=this.active.snapshot.params["numero"];
  

    this.route.navigate(['/reservation',{card_id:index,numero:this.numero}]);

  }
  

}
