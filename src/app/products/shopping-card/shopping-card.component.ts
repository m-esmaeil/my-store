import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Payment, Shopping } from '../shopping.model';
import { ShoppingService } from '../shopping.service';


@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css'],
  providers: [MessageService]
})
export class ShoppingCardComponent implements OnInit {

  public title = "Cart Details";
  public shoppingCartDetails : Shopping[] = [];
  shoppingCartDetails$: Subscription;
  totalPrice = 0;
  items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private shoppingService : ShoppingService, private route: Router, private messageService: MessageService) { 

  }

  ngOnInit(): void {
    this.getAllCarts();
  }

  getAllCarts(){
    this.shoppingService.getall();
    this.shoppingCartDetails$ = this.shoppingService.shoppingCart$.subscribe(res => {
      this.shoppingCartDetails = res;
      this.calculateTotalPrice();
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
      this.addSingle();
      this.getAllCarts();

    }else{
      const product2Update = this.shoppingCartDetails.find(s => s.id == id);
      if(product2Update){
            product2Update.count = count;
            product2Update.total = price*count;
            this.getAllCarts();
            this.update();
      }   
    }
  }

  addSingle() {
    this.messageService.add({severity:'info', summary:'Deleted Messege', detail:'your Product deleted successfully!'});
  }

  update() {
    this.messageService.add({severity:'success', summary:'Updated Messege', detail:'your Product updated successfully!'});
  }

  receiveDataInParent(data: Payment){
    if(!data){
      this.route.navigateByUrl('404');
    }else{
      console.log(data);
      this.route.navigateByUrl('/confirmation/' + data.totalPrice);
    }
  }
}
