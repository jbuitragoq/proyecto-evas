import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  categoryList: CategoryModel[] = [
    { name: 'Categoria 1', image: 'categoria1.jpg' },
    { name: 'Categoria 2', image: 'categoria2.jpg' },
    { name: 'Categoria 3', image: 'categoria3.jpg' }
  ]

  productList: ProductModel[] = [
    { name: 'Producto 1', image: 'producto1.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iure molestias, cumque est quae repellendus atque. Porro error iure animi eius ducimus, soluta aliquid dicta temporibus? Quo voluptatum facere nobis', price: '$1.250.000' },
    { name: 'Producto 2', image: 'producto2.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iure molestias, cumque est quae repellendus atque. Porro error iure animi eius ducimus, soluta aliquid dicta temporibus? Quo voluptatum facere nobis', price: '$1.350.000' },
    { name: 'Producto 3', image: 'producto3.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iure molestias, cumque est quae repellendus atque. Porro error iure animi eius ducimus, soluta aliquid dicta temporibus? Quo voluptatum facere nobis', price: '$1.450.000' },
    { name: 'Producto 4', image: 'producto4.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iure molestias, cumque est quae repellendus atque. Porro error iure animi eius ducimus, soluta aliquid dicta temporibus? Quo voluptatum facere nobis', price: '$1.550.000' },
    { name: 'Producto 5', image: 'producto5.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iure molestias, cumque est quae repellendus atque. Porro error iure animi eius ducimus, soluta aliquid dicta temporibus? Quo voluptatum facere nobis', price: '$1.650.000' },
    { name: 'Producto 6', image: 'producto6.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iure molestias, cumque est quae repellendus atque. Porro error iure animi eius ducimus, soluta aliquid dicta temporibus? Quo voluptatum facere nobis', price: '$1.750.000' },
  ]

  constructor() { }

  ngOnInit(): void {}

}
