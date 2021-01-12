import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AdminService } from './admin.service';
import { AuthguardService } from './authguard.service';
import { CompleteDetailComponent } from './complete-detail/complete-detail.component';
import { EmployeesdetailComponent } from './employeesdetail/employeesdetail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path: 'details', component: CompleteDetailComponent,canActivate:[AuthguardService]},
  {path: 'details/:id', component: CompleteDetailComponent,canActivate:[AuthguardService]},
  {path:'emp',component:EmployeesdetailComponent,canActivate:[AuthguardService]},
  {path:'update',component:UpdateComponent,canActivate:[AdminService]},
  {path:'add',component:AddComponent,canActivate:[AdminService]},
  {path:'register',component:RegisterComponent,canActivate:[AdminService]},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
