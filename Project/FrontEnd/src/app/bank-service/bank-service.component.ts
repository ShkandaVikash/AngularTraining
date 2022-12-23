import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankOperationService } from '../bank-operation.service';
import { BankServiceModel } from '../customer';

@Component({
  selector: 'app-bank-service',
  templateUrl: './bank-service.component.html',
  styleUrls: ['./bank-service.component.css']
})
export class BankServiceComponent implements OnInit {

  userDetailForm:FormGroup;
  creditScore:number;
  validationErrorMessage:String;
  validationErrorCode:String
  accountNo:Number
  accountType = ['Saving Account','CurrentAccount','Demant Account']

  constructor(private bankOperationService:BankOperationService,private router:Router){
    this.creditScore=0;
  }

  ngOnInit(): void {
   this.userDetailForm = new FormGroup({
    'userName': new FormControl(null,[Validators.required,Validators.minLength(4)]),
    'addressModel': new FormGroup({
      'flatNo': new FormControl(null),
      'streetName': new FormControl(null),
      'district': new FormControl(null,[Validators.required,Validators.maxLength(10)]),
      'state': new FormControl(null),
      'pinCode': new FormControl(null,[Validators.required,Validators.minLength(6),Validators.pattern('[0-9]*')])
    }),
    'accountType': new FormControl(null)
   });
  }

  onFormSubmit(){
    console.log(this.userDetailForm.get('accountType').value)
    this.validateInputDetails(this.userDetailForm);
    if(!this.validationErrorMessage){
      this.bankOperationService.addressValidation(this.userDetailForm.get('addressModel').value)
      .subscribe({
        next: (resp) =>{},
        error: (err) => {if(err.status!=200)
                          this.validationErrorMessage = err.error
                        } 
      }) ;
    }
    if(!this.validationErrorMessage){
      this.bankOperationService.fetchcreditcheck( this.enrichUserName(this.userDetailForm.get('userName').value))
      .subscribe({
        next: (resp) => {},
        error: (err) => {if(err.status!=200)
                          this.validationErrorMessage = err.error
                        } 
      });
    }
    if(!this.validationErrorMessage){
    this.bankOperationService.saveCustomerInfo(this.userDetailForm.value)
    .subscribe({
      next: (res:BankServiceModel) => {this.accountNo=res.accountNumber},
      error: (err) => {
                       if(err.status!=200)
                        this.validationErrorMessage = err.error
                      } 
    }) ;
  }
    if(!this.validationErrorMessage)
      this.userDetailForm.reset();
  }

  enrichUserName(tempUserName:string){
    return tempUserName+'-'+(this.creditScore+=1).toString();
  }

  validateInputDetails(userDetailFormData:FormGroup<'userDetailForm'>){
   let tempUserName :string
   tempUserName = userDetailFormData.get('userName').value;
   this.validationErrorMessage = tempUserName.includes('-')?'Invalid User name':'';
  }

  onDetailCustomer(){
    this.router.navigate(['/bankdetails']);
  }

  onClickOfHome(){
    this.router.navigate(['..']);
  }

  onChangeAccountType(e: any){
    this.accountTypeValue?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get accountTypeValue() {
    return this.userDetailForm.get('accountType');
  }

}

