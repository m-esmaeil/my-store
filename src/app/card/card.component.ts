import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { retry, Subscription } from 'rxjs';
import { Product } from '../products/product.model';
import { ProductService } from '../products/product.service';
import { ShoppingService } from '../products/shopping.service';
import { Shopping } from '../products/shopping.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() source: Product;
  items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  btnDisable: boolean = false;
  productSubscription : Subscription;
  productToAdd: Shopping;

  constructor(private productService: ProductService, private shoppingService : ShoppingService, private router: Router) { 
    this.source = {
      id: 0,
      name: "",
      price: 0,
      url: "",
      description: ""
    }
  }

  ngOnInit(): void {
  }

  // add to cart using cart Service
  addToCart(id: number, count: number){
    if(count == 0) {
      alert('not Added, there is no count!');
      return;
    }

    if(id === undefined) return;

    this.productService.getAll().subscribe(res => {
      const product = res.find(s => s.id === id);
      
    if(!product){
      this.router.navigate(['404']);
      return;
    }
    this.productToAdd = {
      id: id,
      name: product.name,
      count: count,
      url: product.url,
      price: product.price,
      total: count*product.price
    }

    this.shoppingService.addProductToShoppingCart(this.productToAdd);

    });

    // this.productSubscription = this.productService.getAll.subscribe(res => {
    //   if(id === undefined) return;

    //   const product = res.find(s => s.id === id);

    //   if(!product){
    //     this.router.navigate(['404']);
    //     return;
    //   }

    //   this.productToAdd = {
    //     id: id,
    //     name: product.name,
    //     count: count,
    //     url: product.url,
    //     price: product.price,
    //     total: product.price * count
    //   }
      
    //   this.shoppingService.addProductToShoppingCart(this.productToAdd)
      
    // });
  }
}
