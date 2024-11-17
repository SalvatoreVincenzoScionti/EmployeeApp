import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderbarComponent } from './components/headerBar/headerbar.component';
import { BaseComponent } from './components/base/base.component';
import { FooterbarComponent } from './components/footerBar/footerbar.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    HeaderbarComponent,
    BaseComponent,
    FooterbarComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';
}
