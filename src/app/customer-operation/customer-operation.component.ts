import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {CUS} from '../mock-customer';
@Component({
  selector: 'app-customer-operation',
  templateUrl: './customer-operation.component.html',
  styleUrls: ['./customer-operation.component.css']
})
export class CustomerOperationComponent implements OnInit {

  customers=CUS;
  selectedCus:Customer;
  constructor() { }

  ngOnInit() {
  }

  onSelect(customer: Customer): void{
    this.selectedCus=customer;
  }
}