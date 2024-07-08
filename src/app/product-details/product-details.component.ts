import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;

  // return the product image URL
  getImageUrl(product: IProduct) {
    if (!this.product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  addToCart(product: IProduct) { }
}


