import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css']
})
export class HomeServiceComponent {

  constructor(private router:Router){

  }

  onCreateCustomer(){
    this.router.navigate(['/bankcreate']);
  }

  onDetailCustomer(){
    this.router.navigate(['/bankdetails']);
  }

}
