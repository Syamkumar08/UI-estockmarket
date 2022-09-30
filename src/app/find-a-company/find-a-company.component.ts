import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ResponseStock } from '../model/response-stock.model';
import { EStockMarketService } from '../service/e-stock-market.service';

@Component({
  selector: 'app-find-a-company',
  templateUrl: './find-a-company.component.html',
  styleUrls: ['./find-a-company.component.css']
})
export class FindACompanyComponent implements OnInit {

  responseStoks:any
  responseStok:any
  responseCompanies: any
  companyCode: any
  startDate: any
  pstartDate: any
  endDate: any
  pendDate: any
  min:any
  max:any
  ave:any
  comCode:any
  comName:any
  endNexday:any
  showInfo: boolean = false




  constructor(private service: EStockMarketService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.service.getAllCompanies().subscribe((companies)=>{
      this.responseCompanies = companies
    })
  }

  public findStocksBetweenDates() {
    this.endDate =this.datepipe.transform(new Date(this.pendDate.year, this.pendDate.month - 1, this.pendDate.day + 1), 'yyyy-MM-dd');
    this.startDate = this.datepipe.transform(new Date(this.pstartDate.year, this.pstartDate.month-1, this.pstartDate.day), 'yyyy-MM-dd');



    this.service.doFindStocksBetweenDates(this.companyCode, this.startDate, this.endDate)
    .subscribe((data)=>{
      this.responseStok = data
      this.responseStoks = this.responseStok.stocks
      this.min = this.responseStok.minPrice
      this.max = this.responseStok.maxPrice
      this.ave = this.responseStok.avePrice
    })
    for (let c of this.responseCompanies) {
      if(this.companyCode===c.company.code){
        this.comName = c.company.name
        this.comCode = this.companyCode
      }
    }
    this.showInfo = true

  }
}
