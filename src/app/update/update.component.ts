import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employeedetail } from '../employeedetail';
import { EmployeedetailsService } from '../employeedetails.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
emp:Employeedetail;
  constructor(private service:EmployeedetailsService) {
    this.emp=JSON.parse(localStorage.getItem('edit'))
    console.log(this.emp)
   }
  submit:string;
  ngOnInit(): void {
  }
  onSubmit(form: NgForm): void {
    if (form.valid){
 
    console.log(form.value)
    this.service.update(form.value).subscribe(m => {
      console.log(m);
      form.resetForm();
       window.confirm("Update is completed")
      this.submit= "Form is updated"
      
    })
}
 else{
        window.confirm("Please fill the required field")
      } 
}}
