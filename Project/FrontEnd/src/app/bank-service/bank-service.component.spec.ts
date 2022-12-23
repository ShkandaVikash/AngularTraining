import { HttpClient, HttpHandler, HttpRequest } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { BankOperationService } from '../bank-operation.service';

import { BankServiceComponent } from './bank-service.component';

describe('BankServiceComponent', () => {
   let component: BankServiceComponent;
  // let fixture: ComponentFixture<BankServiceComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ BankServiceComponent ]
  //   })
  //   .compileComponents();

  //   fixture = TestBed.createComponent(BankServiceComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  // TestBed.configureTestingModule({
  //   providers: [BankServiceComponent]
  // })

  // component = TestBed.get(BankServiceComponent);

  it('should append the given string with - and a numeric (1)', () => {
    const tempStr = enrichUserName('Shkanda')
    expect(tempStr).toBe('Shkanda-1');
  });

  function enrichUserName(tempUserName:string){
    return tempUserName+'-'+(1).toString();
  }


});
