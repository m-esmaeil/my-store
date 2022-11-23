import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public title = "Product List"; 
  public productList: Product[] = [];
  Title: any;
  subscription : Subscription;

  constructor(private service: ProductService) { 

  }

  ngOnInit(): void {
    this.service.getAll().subscribe(res => {
      this.productList = res;
    });
  }

}
