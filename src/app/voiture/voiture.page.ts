import { Component, OnInit } from '@angular/core';

import { InfoService } from '../info.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.page.html',
  styleUrls: ['./voiture.page.scss'],
})
export class VoiturePage implements OnInit {


  cars: any[] = [
  	{
  		nom: 'Mercedes',
  		modele: 'benz C 300',
  		image: 'mercedes_benz_c_300',
  		categorie: 'affaire',
  	},
  	{
  		nom: 'Mercedes',
  		modele: 'benz CLA 2020',
  		image: 'mercedes-benz_cla_2020.jpeg',
  		categorie: 'affaire',
  	},
  	{
  		nom: 'Hyundai',
  		modele: 'Tucson',
  		image: 'hyundai_tucson.jpeg',
  		categorie: 'evenement',
  	},
  	{
  		nom: 'KIA',
  		modele: 'Seltos',
  		image: 'kia_seltos.jpeg',
  		categorie: 'evenement',
  	},
  	{
  		nom: 'Mercedes',
  		modele: 'MARCO POLO',
  		image: 'mercedes_marco_polo.png',
  		categorie: 'vacances',
  	},
  	{
  		nom: 'Mercedes',
  		modele: 'EQV',
  		image: 'mercedes_eqv.jpeg',
  		categorie: 'vacances',
  	},
  	{
  		nom: 'Mercedes',
  		modele: 'SL',
  		image: 'mercedes_sl.jpeg',
  		categorie: 'balades',
  	},
  	{
  		nom: 'KIA',
  		modele: 'SOUL',
  		image: 'kia_soul.jpeg',
  		categorie: 'balades',
  	}
  ]

  constructor(public categorie: InfoService) { }

  ngOnInit() {

  this.categorie.reservation;

  }

  

}
