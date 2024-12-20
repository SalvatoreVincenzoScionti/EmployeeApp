import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ButtonMode } from 'src/app/enums/button-mode';
import { IButton } from 'src/app/models/button.model';
import { IEmployee } from 'src/app/models/employee.model';
import { EmployeeManagementService } from 'src/app/services/employee-management.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employeeManagement.component.html',
  styleUrl: './employeeManagement.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeManagementComponent implements OnDestroy, OnInit {
  private _subs = new Subscription();

  public employeeService = inject(EmployeeManagementService);
  public employeeList$ = this.employeeService.getEmployeeList();
  public employeeList!: IEmployee[];
  public buttonMode = ButtonMode;

  public DELETE_BUTTON: IButton = {
    title: 'delete',
    buttonMode: ButtonMode.Delete,
    onClick: (emp) => {
      if (emp?._id) {
        if (window.confirm('Are you sure you want to delete the entry?')) {
          this._subs.add(
            this.employeeService.delete(emp._id).subscribe((data) => {
              console.log(data);
            })
          );
        }
      }
    },
  };

  ngOnInit(): void {
    this.employeeService.loadEmployeeList();
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
}
