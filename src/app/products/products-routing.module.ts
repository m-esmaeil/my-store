import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DisplayComponent } from './display/display.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';

const routes: Routes = [
  {path: '', component: ProductComponent, pathMatch: 'full'},
  { path: 'products', component: ProductComponent},
  { path: 'products/display/:id', component: DisplayComponent, pathMatch: 'full'},
  { path: 'shopping-cart', component: ShoppingCardComponent, pathMatch: 'full'},
  { path: 'confirmation/:totalPrice', component: ConfirmationComponent, pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
