import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductListComponent } from './components/product-list/product-list.component';


export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'carrito', loadComponent: () => import('./components/cart/cart.component').then(m => m.CartComponent) },
  { path: 'productos', component: ProductListComponent }
];
