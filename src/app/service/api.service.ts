import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server:any="http://afriquearn.com/api/";
  constructor(public http:HttpClient) { 

  }


  Reserver(data){

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

    

     return this.http.post(`${this.server}reservation`,data);

  }


  getReservationInfo(){

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

    

     return this.http.get(`${this.server}reservation`);

  }


  getRerservationInfoByNumber(numero){

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

    

     return this.http.get(`${this.server}reservation/number/${numero}`);


  }


  CarFinder(id){

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

    

     return this.http.get(`${this.server}voiture/${id}`);

  }

  

  CategorieFinder(id_cat){

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

    

     return this.http.get(`${this.server}voiture/categorie/${id_cat}`,{headers:headers});

  }



  auth(numero,password){


    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

    

     return this.http.get(`${this.server}client/auth/${numero}/${password}`,{headers:headers});


  }



  PostData(body){

     
   
    
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

    

     return this.http.post(`${this.server}client`,body);
 }



 //
 getClientData(){


    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

     return this.http.get(`${this.server}client`,{headers:headers});



}

getClientById(id:any){

  let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

     return this.http.get(`${this.server}client/${id}`,{headers:headers});

}

}