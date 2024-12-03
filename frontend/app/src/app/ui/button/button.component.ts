import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonMode } from 'src/app/enums/button-mode';
import { IButton } from 'src/app/models/button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  button = input.required<IButton>();

  buttonMode = ButtonMode;
}
