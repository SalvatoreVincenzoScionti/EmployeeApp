import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { ButtonComponent } from './button.component';
import { IEmployee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-button',
  templateUrl: './employeeButton.component.html',
  styleUrl: './employeeButton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeButtonComponent extends ButtonComponent {
  employee = input<IEmployee>();

  onClick = output<void>();

  buttonClicked() {
    if (this.employee()) {
      this.button().onClick(this.employee());
    } else {
      this.button().onClick();
    }
    this.onClick.emit();
  }
}
