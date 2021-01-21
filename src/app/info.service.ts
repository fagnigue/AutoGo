import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

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
	]

	public reservation: any[] = [
		{
			"categorie":"",
			"voiture":""
		}
	]

  constructor() { }
}
