import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './core/components/main-layout/main-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fe_beta_blogs_noon');
}
