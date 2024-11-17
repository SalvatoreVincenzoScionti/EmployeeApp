import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IButton } from 'src/app/models/button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  button = input.required<IButton>();
  _id = input.required<string>();
}
