import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stock } from '../model/stock.model';
import { EStockMarketService } from '../service/e-stock-market.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  stock: Stock = new Stock(0);
  companyCode: any;
  responseCompanies: any;
  alert: boolean = false
  errorAlert: boolean = false;
  errormessage: string | undefined = undefined;
  response:any

  constructor(private service: EStockMarketService) { }

  ngOnInit(): void {
    this.service.getAllCompanies().subscribe((data)=>{
      this.responseCompanies = data;
    })
  }

  public addStockNow() {
    this.service.doAddStock(this.stock.stockPrice, this.companyCode).subscribe(
      (res) => {
        this.response=res;
        if (this.response.data.message != null) {
          this.alert = false;
          this.errormessage = this.response.data.message;
          this.errorAlert = true;
          console.warn(this.response);
        }else{
          this.errorAlert = false;
          this.alert = true;
          console.info(this.response);
        }
      },
      (error) => {
        console.warn(error);
        this.errormessage = "values provided are not correct";
        this.errorAlert = true;
        this.alert = false;
      }
    );
    if (!this.errorAlert) {
      this.alert = true;
    }
  }

  closeAlert(addCompanyForm: NgForm) {
    this.alert = false
    this.errorAlert = false;
    addCompanyForm.reset();
  }

}
