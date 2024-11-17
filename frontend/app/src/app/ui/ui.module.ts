import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { FormInputFieldComponent } from './formInputField/formInputField.component';

@NgModule({
  declarations: [ButtonComponent, CardComponent, FormInputFieldComponent],
  imports: [CommonModule, RouterModule],
  exports: [ButtonComponent, CardComponent, FormInputFieldComponent],
})
export class UiModule {}
