import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empdetails } from '../empdetails';
import { EmployeedetailsService } from '../employeedetails.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: Empdetails=new Empdetails();

  constructor(private service:EmployeedetailsService) { }
id:number;
funvalue:boolean=false;
submit:string;
username:string;
password:String;
email:string;
photo:string;

  ngOnInit(): void {
    console.log(this.id)
  }


  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log(form.value)
      console.log(JSON.stringify(form.value));
      this.service.newlogin(form.value).subscribe(res => {
        console.log(res);

        form.resetForm();
        this.submit= "Form is submitted"
        if(this.submit=="Form is submittd"){
          this.funvalue=false;
        }
        else{
          this.funvalue=false;
        }
        window.confirm("Form is submitted")
        
      })
    }else{
      window.confirm("Fill the required field")
    }
  }  
}
