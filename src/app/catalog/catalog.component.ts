import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  product: IProduct;

  constructor() {
    this.product = {
      id: 2,
      description: 'Friendly Bot head with two eyes and a smiley face.',
      name: 'Friendly Bot',
      imageName: 'head-friendly.png',
      category: 'Category 1',
      price: 945.0,
      discount: 0.2,
    };
  }

  getImageUrl(product: IProduct) {
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
