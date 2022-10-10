import { Component, OnInit } from '@angular/core';
import { TransactionCompany } from '../model/transaction-company.model';
import { EStockMarketService } from '../service/e-stock-market.service';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-all-companies',
  templateUrl: './list-all-companies.component.html',
  styleUrls: ['./list-all-companies.component.css'],
})
export class ListAllCompaniesComponent implements OnInit {
  responseCompanies: any = [];
  alert: boolean = false;
  constructor(private service: EStockMarketService) {}

  ngOnInit(): void {
   
    this.service.getAllCompanies().subscribe((data) => {
      console.warn(data);
      this.responseCompanies = data;
    });
  }

  deleteCompany(companyCode: any) {
    this.service.doDeleteACompany(companyCode).subscribe(() => {
      const deletedCompany = this.responseCompanies.find((x: any) => { x.code === companyCode });
      this.responseCompanies.splice(this.responseCompanies.indexOf(deletedCompany), 1)
      console.warn('Company delete succesfully');
      this.alert = true;
    })
  }
  closeAlert() {
    this.alert = false;
    this.ngOnInit();
  }

}
