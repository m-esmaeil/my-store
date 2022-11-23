import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { DisplayComponent } from './display/display.component';
import { CardComponent } from '../card/card.component';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
    declarations: [
        ProductComponent,
        DisplayComponent,
        CardComponent,
        TitleBarComponent,
        ShoppingCardComponent,
        ConfirmationComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        FormsModule
    ]
})
export class ProductsModule { }
