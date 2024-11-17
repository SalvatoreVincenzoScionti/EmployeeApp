import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeManagementService } from 'src/app/services/employee-management.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employeeDetails.component.html',
  styleUrl: './employeeDetails.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailsComponent {
  private _router = inject(Router)
  private _employeeService = inject(EmployeeManagementService)

  
  // public idInRouter = this._router
}
