import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: CartItem[] = [];

  private totalItems$ = new BehaviorSubject<number>(0);

  getTotalItems$() {
    return this.totalItems$.asObservable();
  }

  getCart(): CartItem[] {
    return this.items;
  }

  addToCart(product: Product, quantity: number = 1): void {
    const existing = this.items.find(item => item.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
    this.totalItems$.next(this.getTotalItems()); // 🔄 actualiza el contador
    console.log(`Producto agregado al carrito: ${product.name} x${quantity}`);
  }

  removeFromCart(productId: number): void {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.totalItems$.next(this.getTotalItems());
  }

  clearCart(): void {
    this.items = [];
    this.totalItems$.next(0);
  }

  getTotalItems(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.quantity * item.product.price, 0);
  }

  decreaseQuantity(productId: number): void {
    const item = this.items.find(i => i.product.id === productId);
    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeFromCart(productId);
        return;
      }
      this.totalItems$.next(this.getTotalItems());
    }
  }
}
