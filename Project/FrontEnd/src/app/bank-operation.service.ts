import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankOperationService {

  baseUrl:String;
  validationError:String;


  constructor(private httpClient:HttpClient) { 
    this.baseUrl='http://localhost:8080/api/bankinfo';
  }

  saveCustomerInfo(customerData:any){
      return this.httpClient.post(`${this.baseUrl}`,customerData)
  }

  fetchcreditcheck(creditScore:String){
    return this.httpClient.get(`${this.baseUrl}/creditcheck/${creditScore}`);
  }

  addressValidation(address:any){
    let searchParams = new HttpParams();
    searchParams = searchParams.append('flatNo',address.flatNo===null?'':address.flatNo);
    searchParams = searchParams.append('streetName',address.streetName===null?'':address.streetName);
    searchParams = searchParams.append('district',address.district===null?'':address.district);
    searchParams = searchParams.append('state',address.state===null?'':address.state);
    searchParams = searchParams.append('pinCode',address.pinCode===null?'':address.pinCode);
    return this.httpClient.get(`${this.baseUrl}/addresses`,{
      params : searchParams
    })
  }

}
