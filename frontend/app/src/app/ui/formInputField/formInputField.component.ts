import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input-field',
  templateUrl: './formInputField.component.html',
  styleUrl: './formInputField.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputFieldComponent {
  inputType = input.required<string>();
  title = input.required<string>();

  @Input() control: FormControl = new FormControl();
}
