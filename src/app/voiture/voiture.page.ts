import { Component, OnInit } from '@angular/core';

import { InfoService } from '../info.service';

import { Router } from '@angular/router';




@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.page.html',
  styleUrls: ['./voiture.page.scss'],
})
export class VoiturePage implements OnInit {

  public data: any[];

  index: any = '';


  cars: any[] = [
  	{
  		nom: 'Mercedes',
  		modele: 'benz C 300',
  		image: 'mercedes_benz_c_300',
  		categorie: 'affaire',
      prix: 120000,
      disponible:'oui',
  	},
  	{
  		nom: 'Mercedes',
  		modele: 'benz CLA 2020',
  		image: 'mercedes-benz_cla_2020.jpeg',
  		categorie: 'affaire',
      prix: 150000,
      disponible:'oui',
  	},
  	{
  		nom: 'Hyundai',
  		modele: 'Tucson',
  		image: 'hyundai_tucson.jpeg',
  		categorie: 'evenements',
      prix: 80000,
      disponible:'oui',
  	},
  	{
  		nom: 'KIA',
  		modele: 'Seltos',
  		image: 'kia_seltos.jpeg',
  		categorie: 'evenements',
      prix: 90000,
      disponible:'non',
  	},
  	{
  		nom: 'Mercedes',
  		modele: 'MARCO POLO',
  		image: 'mercedes_marco_polo.png',
  		categorie: 'vacances',
      prix: 160000,
      disponible:'non',
  	},
  	{
  		nom: 'Mercedes',
  		modele: 'EQV',
  		image: 'mercedes_eqv.jpeg',
  		categorie: 'vacances',
      prix: 190000,
      disponible:'oui',
  	},
  	{
  		nom: 'Mercedes',
  		modele: 'SL',
  		image: 'mercedes_sl.jpeg',
  		categorie: 'balade',
      prix: 150000,
      disponible:'oui',
  	},
  	{
  		nom: 'KIA',
  		modele: 'SOUL',
  		image: 'kia_soul.jpeg',
  		categorie: 'balade',
      prix: 100000,
      disponible:'oui',
  	}
  ]

  constructor(public categorie: InfoService, public route: Router) { }

  ngOnInit() {

    this.data = this.categorie.reservation;

  }

  getindex(index: any) {

    this.categorie.reservation["voiture_nom"] = this.cars[index]["nom"];
    this.categorie.reservation["voiture_modele"] = this.cars[index]["modele"];
    this.categorie.reservation["voiture_prix"] = this.cars[index]["prix"];

    console.log(this.categorie.reservation);

    this.route.navigate(['/reservation']);

  }
  

}
