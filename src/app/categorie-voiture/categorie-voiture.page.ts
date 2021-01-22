import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './../service/api.service';


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

  constructor(public active:ActivatedRoute,public route: Router, public data: InfoService,public api:ApiService) { }

  ngOnInit() {
	  this.data.reservation;
  }


  finder(id){

	  this.id=this.active.snapshot.params["id"];
    this.route.navigate(["/voiture",{id:id,numero:this.id}]);
    
  }



  






  



}
