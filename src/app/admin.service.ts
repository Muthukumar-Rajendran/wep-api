import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Empdetails } from './empdetails';
import jwt_decode from "jwt-decode"; 
import { Tokeninfo } from './tokeninfo';
 


@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate {
  empdetails : Empdetails;
  decoded:Tokeninfo;
  constructor(private router : Router) { }
  canActivate(_route:import("@angular/router").ActivatedRouteSnapshot): boolean {
    this.empdetails = JSON.parse(localStorage.getItem('idd'));
    console.log(this.empdetails);
    if((this.empdetails.logintype == "admin")||(this.empdetails.logintype == "superadmin"))
    {
      {
      const token = localStorage.getItem("token")
this.decoded = jwt_decode(token);
if(this.decoded.exp *1000 < new Date().valueOf()){
localStorage.removeItem("token")
localStorage.clear();
this .router.navigate(["/login"]) 
 return false;
}}
      return true;
}
    else{
      return false;
    }
  }}


 

  