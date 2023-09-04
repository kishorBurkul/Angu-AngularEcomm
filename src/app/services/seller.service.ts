import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { signUp } from '../data-types';


@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient ) { }
 

  signUpSeller(data:signUp){
     return this.http.post("http://localhost:3000/seller",data);

  }

}
