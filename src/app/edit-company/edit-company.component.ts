import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../model/company.model';
import { Stock } from '../model/stock.model';
import { TransactionCompany } from '../model/transaction-company.model';
import { EStockMarketService } from '../service/e-stock-market.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css'],
})
export class EditCompanyComponent implements OnInit {
  company: Company = new Company;
  stockRequest: Stock = new Stock(0);
  transactionCompany: any;

  alert: boolean = false;
  errorAlert: boolean = false;
  errormessage: string | undefined = undefined;

  constructor(
    private service: EStockMarketService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.code);
    this.service
      .doGetCompanyByCode(this.router.snapshot.params.code)
      .subscribe((data) => {
        console.warn(data);
        this.transactionCompany = data;
        console.warn(this.transactionCompany);
        this.company = this.transactionCompany.company;
        console.warn(this.company);
      });
  }

  public updateACompany() {
    this.service.doUpdateACompany(this.company).subscribe(
      (data) => {
        console.warn(data);
      },
      (error) => {
        // console.warn(error);
        this.errormessage = error;
        this.errorAlert = true;
        if (this.errorAlert) {
          this.alert = false;
        }
      }
    );
    if (!this.errorAlert) {
      this.alert = true;
    }
  }

  closeAlert(addCompanyForm: NgForm) {
    this.alert = false;
    addCompanyForm.reset();
  }

  closeErrorAlert() {
    this.errorAlert = false;
  }
}
