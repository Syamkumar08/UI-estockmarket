import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddStockComponent } from './add-stock/add-stock.component';
//import { EditCompanyComponent } from './edit-company/edit-company.component';
import { ErrorComponent } from './error/error.component';
import { FindAStockComponent } from './find-a-stock/find-a-stock.component';
import { ListAllCompaniesComponent } from './list-all-companies/list-all-companies.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{ path: '', redirectTo:'get-all-companies', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'get-all-companies', component: ListAllCompaniesComponent },
{ path: 'get-a-stock', component: FindAStockComponent },
{ path: 'add-stock', component: AddStockComponent },
{ path: 'add-company', component: AddCompanyComponent },
//{ path: 'get-all-companies/edit/:code', component: EditCompanyComponent },
{ path: '**', component: ErrorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
