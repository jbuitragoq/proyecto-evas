import { NgModule } from '@angular/core';
import { ShopRoutingModule } from './shop-routing.module';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';

@NgModule({
    declarations: [
        ShopComponent
    ],
    imports: [
        ShopRoutingModule,
        CommonModule
    ],
    providers: [],
})
export class ShopModule { }
