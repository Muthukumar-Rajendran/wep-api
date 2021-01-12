import { Component, OnInit,ViewChild } from '@angular/core';
import { tick } from '@angular/core/testing';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Empdetails } from '../empdetails';
import { Employeedetail } from '../employeedetail';
import { EmployeedetailsService } from '../employeedetails.service';


@Component({
  selector: 'app-employeesdetail',
  templateUrl: './employeesdetail.component.html',
  styleUrls: ['./employeesdetail.component.css']
})
export class EmployeesdetailComponent implements OnInit {
  Employeelist: Employeedetail[];
  name:string;
  id:string;
  email:string;
  skills:string;
  funvalue:boolean=true;
  loading:boolean=true;
  start:number;
  end:number;
  length:number;

  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: String[]= ['id','Name','Skills','Email','Employeeid',"options"];
  dataSource: MatTableDataSource<Employeedetail>
  dataa:any;
  empdetails:Empdetails;

  constructor(public employeeservice:EmployeedetailsService, public routes:Router) {}

  ngOnInit(): void {
    this.getMyEmployees(0,5);
  }

  ngAfterViewInit(){
  
  
  }


    getMyEmployees(start,end){
      this.id=null;
      this.name='';
      this.skills='';
      console.log(PageEvent.length)
  
    this.employeeservice.getMyEmployees(start,end).subscribe(s=>
      {
        this.loading=false;
        console.log(s);
        this.Employeelist=s.employee;
        this.length=s.employeecount;

        console.log(this.empdetails);

        this.dataSource = new MatTableDataSource<Employeedetail>(this.Employeelist);
        this.dataa=new MatTableDataSource<Employeedetail>(this.Employeelist)
        this.dataSource.sort = this.sort;
        console.log(this.dataSource.sort);
        console.log(this.dataSource);
  })
  this.reload();
}


pageChanged(event){
  this.loading = true;

  let pageIndex = 1+(event.pageIndex);
  let pageSize = event.pageSize;

  let previousIndex = event.previousPageIndex;

  let previousSize = pageSize * pageIndex;
  this.end=pageSize*pageIndex;
  console.log(this.end)
  this.start=this.end-pageSize;
  console.log(this.start);

  this.getNextData(previousSize,this.start,pageSize);
}
getNextData(previousSize,start, end) {
  

  this.employeeservice.getMyEmployees(start,end).subscribe(s => {
    this.loading = false;
 console.log(s)
    if (s && this.funvalue) {
      this.hideloader();
    }
    this.Employeelist=s.employee;
    console.log(this.Employeelist)
    this.length=s.employeecount;

    this.dataSource = new MatTableDataSource<Employeedetail>(this.Employeelist);

    this.dataa = new MatTableDataSource<Employeedetail>(this.Employeelist);
    this.dataSource._updateChangeSubscription();
   this.dataa._updateChangeSubscription();
    this.dataSource.sort=this.sort;
     console.log(this.dataSource.data);
  
    
  })
  
}


reload(){ 
 var a =localStorage.getItem('c')
  console.log(a)  
  if(a == "loggedin"){
location.reload();
localStorage.setItem("c",'N')
  } 
 

}
  Deleteemployee(data:Employeedetail):void
  {
    const confirm =window.confirm("Are you Sure want to delete?")
    if(confirm){
    this.employeeservice.deletee(data.id).subscribe(res=>{
      console.log(res);
      location.reload();
 
    })}
  }

  admin() {
    this.empdetails = JSON.parse(localStorage.getItem('idd'));
    // console.log(this.userinfo);
    if (this.empdetails.logintype == "admin") {

      return true;
    } else {
      return false;
    }
  }
  superadmin() {
    this.empdetails = JSON.parse(localStorage.getItem('idd'));
    //console.log(this.userinfo);
    if (this.empdetails.logintype == "superadmin") {

      return true;
    } else {
      return false;
    }
  }


  hideloader() {
    this.funvalue = false
  }

 search(){
   console.log(this.name);
   this.dataa=this.Employeelist.filter(res=>res.name.toLowerCase().match(this.name.toLowerCase()) && res.skills.toLowerCase().match(this.skills.toLowerCase()) 
   )
   
   this.dataSource =this.dataa;
   if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  } }

  searchid(){
    console.log(this.id);
    this.dataa=this.Employeelist.filter(res=>{
      return res.employeeid==this.id
    })
    
    this.dataSource =this.dataa;
    if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
   } }
   searchskills(){
    console.log(this.skills);
    this.dataa=this.Employeelist.filter(res=>{
      return res.skills.toLowerCase().match(this.skills.toLowerCase()); 
    })
    
    this.dataSource =this.dataa;
    if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
   } }
 applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  


  public highlightSelectedRow(row): void
  {
      this.routes.navigate(['details', row.id ]);
  }
  public update(item):void
{console.log(item)
  this.routes.navigate(['update'])
 localStorage.setItem('edit',JSON.stringify(item))
  
}


}
