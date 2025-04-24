import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  subtotal = 0;
  discount = 0;
  finalTotal = 0;

  couponCode = '';
  couponMessage = '';
  couponValid = false;


  cartItems: CartItem[] = [];

  constructor(public cartService: CartService) {
    this.cartItems = this.cartService.getCart();
  }

  getSubtotal() {
    this.subtotal = this.cartService.getTotalPrice();
    this.finalTotal = this.subtotal - (this.subtotal * this.discount / 100);
    return this.subtotal;
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  decreaseItem(productId: number) {
    this.cartService.decreaseQuantity(productId);
    this.cartItems = this.cartService.getCart();
  }

  applyCoupon() {
    this.couponMessage = '';
    this.couponValid = false;
    this.discount = 0;

    const code = this.couponCode.trim();

    if (code.length < 8) {
      this.couponMessage = '❌ El cupón debe tener al menos 8 caracteres.';
      return;
    }

    const suffix = code.slice(-2);
    const discountValue = Number(suffix);

    if (isNaN(discountValue)) {
      this.couponMessage = '❌ Los dos últimos caracteres deben ser numéricos.';
      return;
    }

    this.discount = discountValue;
    this.couponValid = true;
    this.finalTotal = this.subtotal - (this.subtotal * this.discount / 100);
    this.couponMessage = `✅ Cupón aplicado: ${discountValue}% de descuento.`;
  }


}
