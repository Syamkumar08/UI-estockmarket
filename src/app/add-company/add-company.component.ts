import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Company } from '../model/company.model';
import { Stock } from '../model/stock.model';
import { TransactionCompany } from '../model/transaction-company.model';
import { EStockMarketService } from '../service/e-stock-market.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css'],
})
export class AddCompanyComponent implements OnInit {
  company: Company = new Company;
  stockRequest: Stock = new Stock(0);
  transactionCompany: any;
  alert: boolean = false;
  errorAlert: boolean = false;
  errormessage: string | undefined = undefined;

  constructor(private service: EStockMarketService) {}

  ngOnInit(): void {}

  public registerCompany() {
    this.transactionCompany = new TransactionCompany(
      this.company
    );
    this.company
    this.service.doRegisterCompany(this.company).subscribe(
      (data) => {
        if (data.status == "406 NOT_ACCEPTABLE") {
          this.alert = false;
          this.errormessage = data.message;
          this.errorAlert = true;
          console.warn(data);
        }else{
          this.errorAlert = false;
          this.alert = true;
          console.info(data);
          this.service.doAddStock(this.stockRequest.stockPrice,this.company.companyCode).subscribe()
        }
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
