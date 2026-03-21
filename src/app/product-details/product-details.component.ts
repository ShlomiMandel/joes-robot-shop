import { Component, signal } from '@angular/core';
import { IProduct } from '../product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'bot-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: IProduct;
  availableInventory = signal(3);

  constructor() {
    this.product = {
      id: 2,
      description: "A friendly robot head with two eyes and a smile -- great for domestic use.",
      name: "Friendly bot",
      imageName: "head-friendly.png",
      category: "Heads",
      price: 945.0,
      discount: 0.2
    };
  }

  getImageUrl(product: IProduct) {
    return '/images/robot-parts/' + product.imageName;
  }

  addToCart(event: MouseEvent) {
    //setTimeout(() => this.availableInventory.set(this.availableInventory() - 1), 100);
    setTimeout(() => this.availableInventory.update((p) => p - 1), 3000);
    console.log(event);
  }
}
