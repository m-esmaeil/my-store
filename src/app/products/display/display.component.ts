import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  public cardSource : Product = {
    id: 0,
    name: "",
    description: "",
    url: "",
    price: 0
  } ;
  public routeId : number;
  public title : string;
  routeSubscription : Subscription;
  productSubscription : Subscription;

  constructor(private router : Router ,private route : ActivatedRoute, private productService: ProductService) { 
    // this.routeSubscription = this.route.params.subscribe(params => {
    //   this.routeId = +params['id'];
    // });

    // this.productSubscription = this.productService.productList$.subscribe(res => {
    //   if(this.routeId === undefined) return;

    //   const productCard = res.find(s => s.id === this.routeId);
    //   if(!productCard){
    //     this.router.navigate(['404']);
    //     return;
    //   }

    //   this.cardSource = productCard;
    // })
  }
  // ngOnDestroy(): void {
  //   this.routeSubscription.unsubscribe();
  //   this.productSubscription.unsubscribe();
  // }

  ngOnInit() {

    //get product Id from route
    this.route.paramMap.subscribe(params => {
      this.routeId = +(params.get('id')??0);
    });

    //get product name from query string
    // this.route.queryParamMap.subscribe(Qparams => {
    //   console.log(Qparams);
    //   this.title = "Details : " + Qparams.get('title');
    // })

    this.productService.getAll().subscribe(res => {
      this.cardSource = res.find(r=>r.id==this.routeId)??{}as Product;
    })
  }

}
