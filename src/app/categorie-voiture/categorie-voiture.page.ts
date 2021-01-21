import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie-voiture',
  templateUrl: './categorie-voiture.page.html',
  styleUrls: ['./categorie-voiture.page.scss'],
})
export class CategorieVoiturePage implements OnInit {


	evenements: string = 'Evènements';
	affaire: string = 'Affaire';
	balade: string = 'Balade';
	vacances: string = 'Vacances'; 

  constructor(public route: Router, public data: InfoService) { }

  ngOnInit() {

  	this.data.reservation;
  }


  Evenements() {
	
  	this.data.reservation["categorie"] = this.evenements;

	  this.route.navigate(['/voiture']);
  }





  Affaire() {

  	this.data.reservation["categorie"] = this.affaire;
  	
	  this.route.navigate(['/voiture']);
  }





  Balade() {

  	console.log(this.balade);
  	this.data.reservation["categorie"] = this.balade;

	this.route.navigate(['/voiture']);
  }





  Vacances() {

  	console.log(this.vacances);
  	this.data.reservation["categorie"] = this.vacances;

	this.route.navigate(['/voiture']);
  }





}
