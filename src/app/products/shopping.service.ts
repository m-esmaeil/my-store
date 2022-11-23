import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Shopping } from './shopping.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private shoppingCart: Shopping[] = [];
  totalPrice : number;
  shoppingCart$ = new BehaviorSubject<Shopping[]>(this.shoppingCart);


  constructor(private http: HttpClient) { }

  getall(){
    return this.shoppingCart$.next(this.shoppingCart);
  }

  addProductToShoppingCart(data: Shopping){
    const existCart = this.shoppingCart.find(s => s.id === data.id);
    if(existCart){
      alert('this card was existing in cart recently!');
      return;
    }else{
      this.shoppingCart.push(data);
      this.shoppingCart$.next(this.shoppingCart);
      alert('card added successfully!')
    }
  }

  removeProductFromShoopingCart(id: number){
    const index = this.shoppingCart.findIndex(s => s.id == id);
    this.shoppingCart.splice(index,1);

    this.shoppingCart$.next(this.shoppingCart);
  }
}
