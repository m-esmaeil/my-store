import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Payment, Shopping } from '../shopping.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {

  public title = "Cart Details";
  public shoppingCartDetails : Shopping[] = [];
  shoppingCartDetails$: Subscription;
  totalPrice = 0;
  items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private shoppingService : ShoppingService,private route: Router) { 

  }

  ngOnInit(): void {
    this.getAllCarts();
  }

  getAllCarts(){
    this.shoppingService.getall();
    this.shoppingCartDetails$ = this.shoppingService.shoppingCart$.subscribe(res => {
      this.shoppingCartDetails = res;
      this.calculateTotalPrice();
      console.log(res);
    })
  }

  calculateTotalPrice(){
    this.totalPrice = 0;
    this.shoppingCartDetails.forEach(element => {
      this.totalPrice += element.total;
    });
  }

  updatePrice(id:number, price: number, count: number){
    if(count == 0){
      this.shoppingService.removeProductFromShoopingCart(id);
      this.getAllCarts();

    }else{
      const product2Update = this.shoppingCartDetails.find(s => s.id == id);
      if(product2Update){
            product2Update.count = count;
            product2Update.total = price*count;
            this.getAllCarts();
      }   
    }
  }

}
