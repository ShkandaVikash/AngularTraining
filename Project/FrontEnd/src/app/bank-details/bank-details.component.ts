import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankServiceModel } from '../customer';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit{
  username:String;
  accountType:String;
  flatNo:String
  streetName:String
  district:String
  state:String
  pinCode:String

  constructor(private httpClient:HttpClient,private router:Router) { 
    
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:8080/api/bankinfo/User1').subscribe({
      next: (res:BankServiceModel) => {
        this.username = res.userName;
        this.accountType=res.accountType
        this.flatNo=res.addressModel.flatNo
        this.streetName=res.addressModel.streetName
        this.district=res.addressModel.district
        this.state=res.addressModel.state
        this.pinCode=res.addressModel.pinCode
      }
    });
  }

  onCreateCustomer (){
    this.router.navigate(['/bankcreate']);
  }

  onClickOfHome(){
    this.router.navigate(['..']);
  }
  
}
