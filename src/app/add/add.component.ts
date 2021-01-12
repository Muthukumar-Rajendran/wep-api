import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employeedetail } from '../employeedetail';
import { EmployeedetailsService } from '../employeedetails.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
submit:string;
emp: Employeedetail = new Employeedetail();
  constructor(private service:EmployeedetailsService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log(form.value)
      this.service.create(form.value).subscribe(res => {
        console.log(res);
        form.resetForm();
        window.confirm("form is submited")
        this.submit= "Form is submitted"
        
      })
    }
     else{
            window.confirm("Please fill the required field")
          } 
  }

}
