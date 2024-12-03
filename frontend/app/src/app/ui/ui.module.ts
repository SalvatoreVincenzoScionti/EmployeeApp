import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { FormInputFieldComponent } from './formInputField/formInputField.component';
import { EmployeeButtonComponent } from './button/employeeButton.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    FormInputFieldComponent,
    EmployeeButtonComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    ButtonComponent,
    CardComponent,
    FormInputFieldComponent,
    EmployeeButtonComponent,
  ],
})
export class UiModule {}
