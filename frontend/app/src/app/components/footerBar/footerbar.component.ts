import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footerbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footerbar.component.html',
  styleUrl: './footerbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterbarComponent {}
