import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Empdetails } from './empdetails';
import { Employeecollection } from './employeecollection';
import { Employeedetail } from './employeedetail';
import { LoginComponent } from './login/login.component';
import { Logincollection } from './logincollection';

@Injectable({
  providedIn: 'root'
})
export class EmployeedetailsService {
  private readonly url1:string="https://localhost:44343/api/empdetail"
  constructor(private http:HttpClient) { }
  logi(username,pwd) :Observable<Logincollection>
  {
   
   return this.http.get<Logincollection>('https://localhost:44343/api/login?username='+ username +'&pwd=' +pwd );
  }
  getMyEmployees(start,end):Observable<Employeecollection>{
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token")); 
 


    return this.http.get<Employeecollection>('https://localhost:44343/api/empdetail?start=' +start + '&end='+end,{headers:headers_object}   )
  }
  empdetail(): Observable<any[]>{
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"));

    return this.http.get<any>('https://localhost:44343/api/empdetail',{headers:headers_object} 
 
    );
  }
  create(form :Employeedetail):Observable<Employeedetail>
  {
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"));

    return this.http.post<Employeedetail>( this.url1,form,{headers:headers_object} 
 
      );
  }
  deletee(id:any):Observable<Employeedetail>
  {
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"));

    return this.http.delete<Employeedetail>(this.url1 + "/" + id,{headers:headers_object} 
 
    )
  }
  update(form :Employeedetail):Observable<void>
  {
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"));
    return this.http.put<void>( `${this.url1}/${form.id}`,form,{headers:headers_object} 
 
    );
  }
  newlogin(form :Empdetails):Observable<Empdetails>
  {
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"));

    return this.http.post<Empdetails>( this.url1,form,{headers:headers_object} 
 
      );
  }
}
