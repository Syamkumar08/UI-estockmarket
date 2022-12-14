import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionCompany } from '../model/transaction-company.model';
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EStockMarketService {

  constructor(private http:HttpClient) { }

  public doAddStock(stock: any, companyCode: any) {  
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(stock)
    return this.http.post("http://stock.hsf2huftcxdxg3d7.canadacentral.azurecontainer.io:8082/api/v1.0/market/stock/add/" + companyCode, body,  {'headers':headers});
  }

  public doRegisterCompany(stransactionCompany: any): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(stransactionCompany)
    return this.http.post("http://company.fzhzfxafbda9fhbw.canadacentral.azurecontainer.io:8081/api/v1.0/market/company/register" ,body)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = ''
    if (error.status === 0) {
      errorMessage = `An error occurred: ${error.error}`
    } else {
        errorMessage = `Backend returned code ${error.status}, reason: ${error.error}`
    }
    errorMessage += `\n Please try again.`
    return throwError(errorMessage);
  }


  public getAllStocks() {
    return this.http.get("http://stock.hsf2huftcxdxg3d7.canadacentral.azurecontainer.io:8082/api/v1.0/market/stock/getall");
  }

  public getAllCompanies() {
    return this.http.get<TransactionCompany>("http://company.fzhzfxafbda9fhbw.canadacentral.azurecontainer.io:8081/api/v1.0/market/company/getall" );
  }
  
  public getAllCompaniesWithStocks() {
    return this.http.get<TransactionCompany>("http://company.fzhzfxafbda9fhbw.canadacentral.azurecontainer.io:8081/api/v1.0/market/company/getAllCompaniesWithStocks" );
  }

  public doFindStocksBetweenDates(companyCode: any, startDate: Date, enddate: Date) {
    return this.http.get(`http://stock.hsf2huftcxdxg3d7.canadacentral.azurecontainer.io:8082/api/v1.0/market/stock/get/${companyCode}/${startDate}/${enddate}`)
  }

  public doDeleteACompany (companyCode: any) {
    return this.http.delete(`http://company.fzhzfxafbda9fhbw.canadacentral.azurecontainer.io:8081/api/v1.0/market/company/delete/${companyCode}`,{responseType:'text' as 'json'})
  }

  public doGetCompanyByCode(companyCode: any) {
    return this.http.get(`http://company.fzhzfxafbda9fhbw.canadacentral.azurecontainer.io:8081/api/v1.0/market/company/info/${companyCode}`)
  }

  public doUpdateACompany (company: any) {
    return this.http.put(`http://company.fzhzfxafbda9fhbw.canadacentral.azurecontainer.io:8081/api/v1.0/market/company/update`, company)
  }
}

