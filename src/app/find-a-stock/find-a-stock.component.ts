import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ResponseStock } from '../model/response-stock.model';
import { EStockMarketService } from '../service/e-stock-market.service';

@Component({
  selector: 'app-find-a-stock',
  templateUrl: './find-a-stock.component.html',
  styleUrls: ['./find-a-stock.component.css']
})
export class FindAStockComponent implements OnInit {

  responseStocks:any
  responseStock:any
  responseCompanies: any
  companyCode: any
  startDate: any
  pstartDate: any
  endDate: any
  pendDate: any
  min:any
  max:any
  avg:any
  comCode:any
  comName:any
  endNexday:any
  showInfo: boolean = false
  response:any
  message:any




  constructor(private service: EStockMarketService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.service.getAllCompanies().subscribe((companies)=>{
      this.responseCompanies = companies
    })
  }

  public findStocksBetweenDates() {
    this.endDate =this.datepipe.transform(new Date(this.pendDate.year, this.pendDate.month - 1, this.pendDate.day), 'yyyy-MM-dd');
    this.startDate = this.datepipe.transform(new Date(this.pstartDate.year, this.pstartDate.month-1, this.pstartDate.day), 'yyyy-MM-dd');



    this.service.doFindStocksBetweenDates(this.companyCode, this.startDate, this.endDate)
    .subscribe((res)=>{
      this.response=res;
      this.responseStock = this.response.data;
      console.log(res);
      if (this.responseStock != null && this.companyCode == this.responseStock.companyCode) {
      this.responseStocks = this.response.data.stocks;
      this.comCode=this.responseStock.companyCode;
      this.min = this.responseStock.minStockPrice;
      this.max = this.responseStock.maxStockPrice;
      this.avg = this.responseStock.avgStockPrice;
      this.comName = this.responseStock.companyName;
      this.showInfo = true;
      }else{
        this.message=this.response.message.description
      }
    })
  

  }
}
