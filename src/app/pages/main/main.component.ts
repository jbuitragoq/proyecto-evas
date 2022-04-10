import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  // slides
  description1 = 'Te ofrecemos alternativas de cuidado íntimo sostenibles, aportando a la protección del medio ambiente';
  description2 = 'Productos y accesorios elaborados a mano con calidad y amor';
  description3 = 'Alternativas reutilizables que permiten aportar a tu economía';

  slideList = [
    { type: 2, title: 'Slide1', description: this.description1, id: 'slide1', class: 'slide_1', backgroundImage: 'slide1.jpg', image: 'eva-mini5.png', posImage: 2 },
    { type: 2, title: 'Slide2', description: this.description2, id: 'slide2', class: 'slide_2', backgroundImage: 'slide2.jpg', image: 'eva-mini5.png', posImage: 1 },
    { type: 2, title: 'Slide3', description: this.description3, id: 'slide3', class: 'slide_3', backgroundImage: 'slide3.jpg', image: 'eva-mini5.png', posImage: 1 },
  ];
  slideMargin = '0%';
  slideSelected = 0;
  slidePrevious = this.slideList.length - 1;
  slideNext = 1;
  slidesWidth = `${this.slideList.length * 100}%`;
  slideWidth = `${100/this.slideList.length}%`

  // categories

  categoryList: CategoryModel[] = [
    { name: 'Chicas', image: 'category1_sup.jpg', imageOver: 'category1_low.jpg' },
    { name: 'Mujeres', image: 'category2_sup.jpg', imageOver: 'category2_sup.jpg' },
    { name: 'Personas Menstruantes', image: 'category3_sup.jpg', imageOver: 'category3_low.jpg' },
    { name: 'Adult@ Mayor', image: 'category4_sup.jpg', imageOver: 'category4_low.jpg' },
    { name: 'Nuestra Familia', image: 'category5_sup.jpg', imageOver: 'category5_low.jpg' }
  ];
  categoryOver: CategoryModel | undefined = undefined;

  // products

  productList: ProductModel[] = [
    { name: 'Producto 1', image: 'product1.jpg', price: '$1.250.000' },
    { name: 'Producto 2', image: 'product2.jpg', price: '$1.350.000' },
    { name: 'Producto 3', image: 'product3.jpg', price: '$1.450.000' },
    { name: 'Producto 4', image: 'product4.jpg', price: '$1.550.000' },
    { name: 'Producto 5', image: 'product5.jpg', price: '$1.650.000' },
    { name: 'Producto 6', image: 'product6.jpg', price: '$1.750.000' },
  ]

  constructor() { }

  ngAfterViewInit(): void {
    this.setIntervalSlider();
  }

  selectSlide(idx: number): void {
    this.slideSelected = idx;
    this.slidePrevious = idx === 0 ? this.slideList.length - 1 : idx - 1;
    this.slideNext = idx + 1 === this.slideList.length ? 0 : idx + 1;
    this.slideMargin = `-${idx * 100}%`;
  }

  setIntervalSlider(): void {
    setInterval(() => {
      this.selectSlide(this.slideSelected === this.slideList.length - 1 ? 0 : this.slideSelected + 1);
    }, 5000);
  }

  overCategory(category: CategoryModel | undefined): void {
    this.categoryOver = category;
  }

}
