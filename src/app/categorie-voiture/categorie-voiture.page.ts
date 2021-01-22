import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { Router } from '@angular/router';
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


  constructor(public route: Router, public data: InfoService,public api:ApiService) { }

  ngOnInit() {
	  this.data.reservation;
  }


  finder(id){
	  
		this.route.navigate(["/voiture",{id:id}]);
  }


  






  



}
