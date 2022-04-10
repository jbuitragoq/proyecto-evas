import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  productList: ProductModel[] = [
    { name: 'Producto 1', image: 'product1.jpg', price: '$1.250.000' },
    { name: 'Producto 2', image: 'product2.jpg', price: '$1.350.000' },
    { name: 'Producto 3', image: 'product3.jpg', price: '$1.450.000' },
    { name: 'Producto 4', image: 'product4.jpg', price: '$1.550.000' },
    { name: 'Producto 5', image: 'product5.jpg', price: '$1.650.000' },
    { name: 'Producto 6', image: 'product6.jpg', price: '$1.750.000' },
  ]

  constructor() { }

  ngOnInit(): void { }

}
