import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeManagementComponent } from './employeeManagement.component';
import { CreateEmployeeComponent } from './createEmployee/createEmployee.component';
import { EmployeeDetailsComponent } from './employeeDetails/employeeDetails.component';
import { UiModule } from '../../ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EmployeeManagementComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
  ],
  imports: [CommonModule, UiModule, ReactiveFormsModule, RouterModule],
})
export class EmployeeManagementModule {}
