import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-form-input-field',
  templateUrl: './formInputField.component.html',
  styleUrl: './formInputField.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputFieldComponent {
  inputType = input.required<string>();
}
