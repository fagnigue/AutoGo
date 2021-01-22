import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server:any="http://afriquearn.com/api/";
  constructor(public http:HttpClient) { 

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