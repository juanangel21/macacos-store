import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MainComponent} from './components/main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent, MainComponent, CommonModule, RouterOutlet],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'macacos-store';
}
