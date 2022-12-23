import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BankServiceComponent } from './bank-service/bank-service.component';
import { HttpClientModule } from '@angular/common/http';
import { BankOperationService } from './bank-operation.service';
import { HomeServiceComponent } from './home-service/home-service.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { RouterModule, Routes } from '@angular/router';

const bankRoute : Routes = [
  {path:'', component:HomeServiceComponent},
  {path:'bankcreate', component:BankServiceComponent},
  {path:'bankdetails', component:BankDetailsComponent},
  {path:'**', redirectTo:'/'},
];

@NgModule({
  declarations: [
    AppComponent,
    BankServiceComponent,
    HomeServiceComponent,
    BankDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(bankRoute)

  ],
  providers: [BankOperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
