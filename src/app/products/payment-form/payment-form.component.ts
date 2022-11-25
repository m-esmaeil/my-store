import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Payment } from '../shopping.model';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  @Input() totalPriceToChild: number = 0;
  @Output() userDataToParent = new EventEmitter<Payment>();

  constructor() { }

  ngOnInit(): void {
  }


  sendPaymentData(data: any){
    console.log(data);
    this.userDataToParent.emit(data);
  }

}
