import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

	public voiture: any[];

	public client: any[] = [
		{
			"nom":"",
			"prenom":"",
			"email":"",
			"contact":"",
			"profession":"",
			"city":"",
			"password":""
		}
	];

	public reservation: any[] = [
		{
			"categorie":"",
			"voiture_nom":"",
			"voiture_modele":"",
			"voiture_prix":"",
			"delai":"",
			"chauffeur":""
		}
	];

  constructor() { }
}
