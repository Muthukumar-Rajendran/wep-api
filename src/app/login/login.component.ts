import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeedetailsService } from '../employeedetails.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
users: string;
namee:string;
pwd:string;
b:any=[];
funvalue:boolean=false;
userstatus:string='notlogged'
status:string='';
  constructor(private empservice:EmployeedetailsService, private routes: Router) {
    
   }

  ngOnInit(): void {
  }
  
  logindetaill():void
  {
    this.funvalue=true;
    this.empservice.logi(this.namee,this.pwd).subscribe((dataa)=>{
        
      console.log(dataa);
        this.b=dataa.logindetails
  

    if(dataa.token!=null)
    {
      this.funvalue=false;
          this.status="Authenticated user";
        
           this.routes.navigate(['emp']);
           this.userstatus='loggedin'
           localStorage.setItem('b',this.userstatus)
           localStorage.setItem('c',this.userstatus)
           localStorage.setItem('idd',JSON.stringify(this.b))
           localStorage.setItem("token",dataa.token)
           console.log(localStorage.getItem("token"))
          
          
        

         }
         else
        {
          this.funvalue=false;
           this.status="Not Authenticated user";
           console.log(this.pwd)
          
           this.userstatus='notloggedin'
           localStorage.setItem('b',this.userstatus)

         }
        })
  }
  loggedin():boolean{
    var status = localStorage.getItem("b");
 

    if(status == 'loggedin')
    {
      return true;
    }

    else
    {
      return false;
    }
  }


}
