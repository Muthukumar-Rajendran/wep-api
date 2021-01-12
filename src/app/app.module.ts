import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeesdetailComponent } from './employeesdetail/employeesdetail.component';
// import{MatSort}from '@angular/material/sort'
import{MatSortModule}from '@angular/material/sort';
import { CompleteDetailComponent } from './complete-detail/complete-detail.component';
import { AuthguardService } from './authguard.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import {MatMenuModule} from '@angular/material/menu';
import { RegisterComponent } from './register/register.component';
import { EmployeedetailsService } from './employeedetails.service';
import { AdminService } from './admin.service';
import { LogincollectionComponent } from './logincollection/logincollection.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeesdetailComponent,
    CompleteDetailComponent,
    AddComponent,
    UpdateComponent,
    RegisterComponent,
    LogincollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,MatToolbarModule,MatSidenavModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule,MatTableModule,
    MatCardModule,MatDividerModule,MatListModule,HttpClientModule,FormsModule,MatSortModule,MatCardModule,MatPaginatorModule,MatMenuModule,
  ],
  providers: [AuthguardService,EmployeedetailsService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
