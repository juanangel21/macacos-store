import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import { ProductListComponent } from "./components/product-list/product-list.component";
import {ProductCardComponent} from "./components/product-list/product-card/product-card.component";
import {CartComponent} from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent, MainComponent, CommonModule,
    RouterOutlet, ProductListComponent,ProductCardComponent,CartComponent],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'macacos-store';
}
