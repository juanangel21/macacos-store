import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Tienda', path: '/productos' },
    { name: 'Ayuda', path: '/ayuda' }
  ];
  showCartAnimation = false;
  totalItems = 0;

  constructor(private cartService: CartService) {
    // Suscribirse al observable de cambios del carrito
    this.cartService.getTotalItems$().subscribe(count => {
      this.totalItems = count;
    });
  }

  toggleMenu() {
    this.showCartAnimation = true;
  }
}
