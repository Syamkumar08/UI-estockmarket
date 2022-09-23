import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule , NgForm } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ListAllCompaniesComponent } from './list-all-companies/list-all-companies.component';
import { ErrorComponent } from './error/error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FindACompanyComponent } from './find-a-company/find-a-company.component'
import { DatePipe } from '@angular/common';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './service/auth.service';
import { AuthInterceptor } from './interceptors/auth-interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddStockComponent,
    SignupComponent,
    AddCompanyComponent,
    ListAllCompaniesComponent,
    ErrorComponent,
    FindACompanyComponent,
    EditCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule ,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],

  providers: [
    AuthService,
    DatePipe,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    //{provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
