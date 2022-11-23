import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productURL = "../../assets/data/data.json";
  private productList : Product[] = [];

  constructor(private http: HttpClient) { }

  // getAll(){
  //   const subscription =  this.http.get<Product[]>(this.productURL).subscribe(res => {
  //     this.productList = res;
  //     this.productList$.next(this.productList);


  //   })
  // }

  getAll() {
    return this.http.get<Product[]>(this.productURL);
  }

}
