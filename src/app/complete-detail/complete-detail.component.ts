import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employeedetail } from '../employeedetail';
import { EmployeedetailsService } from '../employeedetails.service';

@Component({
  selector: 'app-complete-detail',
  templateUrl: './complete-detail.component.html',
  styleUrls: ['./complete-detail.component.css']
})
export class CompleteDetailComponent implements OnInit {
  @Input() id: number;

  employees: Employeedetail[];
  employee: Employeedetail = new Employeedetail();
  constructor(private detailsservice:EmployeedetailsService, private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.detailsservice.empdetail().subscribe(s=> 
      {
        this.employees = s;
        this.get(this.employees);
      }
      );
  }
  get(employeeList: Employeedetail[]): void  {
    const empId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.employee = employeeList.find(s=> s.id == empId);
    console.log(this.employee)
  }


  backbutton(){
    this.router.navigate(['emp']);
  }
}
