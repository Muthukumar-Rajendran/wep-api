import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empdetails } from './empdetails';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
srcc:Empdetails;
constructor(private router:Router){
  this.jsoncard();
}

logoutt():void{

localStorage.clear();
localStorage.removeItem("token");
this.router.navigate(['login'])
   

  
  }
  jsoncard() {
    this.srcc = JSON.parse(localStorage.getItem('idd'));
    console.log(this.srcc);


  }



  loggedinn():boolean{
    var status = localStorage.getItem('b');
    
 

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
