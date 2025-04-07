import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: "Play Station 5 Pro",
      price: 750,
      image: "assets/images/ps5-pro.jpg"
    },
    {
      id: 2,
      name: "Xbox Series X",
      price: 500,
      image: "assets/images/xbox-series-x.jpg"
    },
    {
      id: 3,
      name: "Play Station 5 Slim",
      price: 500,
      image: "assets/images/ps5-slim.jpg"
    },
    {
      id: 4,
      name: "Nintendo Switch OLED",
      price: 250,
      image: "assets/images/nintendo-switch-oled.jpg"
    },
    {
      id: 5,
      name: "Steam Deck",
      price: 700,
      image: "assets/images/steam-deck.jpg"
    },
    {
      id: 6,
      name: "Meta Quest 3",
      price: 850,
      image: "assets/images/meta-quest.jpg"
    }
  ];

  chunkedDesktop: any[][] = [];
  chunkedMobile: any[][] = [];

  constructor() {
    this.chunkedDesktop = this.chunkProducts(this.products, 3);
    this.chunkedMobile = this.chunkProducts(this.products, 1);
  }

  chunkProducts(arr: any[], size: number): any[][] {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }
}