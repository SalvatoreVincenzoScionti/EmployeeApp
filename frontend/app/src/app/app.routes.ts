import { Route } from '@angular/router';

import { BaseComponent } from './components/base/base.component';
import { EmployeeManagementModule } from './components/employeeManagement/employee-management.module';
import { EmployeeManagementComponent } from './components/employeeManagement/employeeManagement.component';
import { AppOverviewComponent } from './components/appOverview/appOverview.component';
import { EmployeeDetailsComponent } from './components/employeeManagement/employeeDetails/employeeDetails.component';
import { CreateEmployeeComponent } from './components/employeeManagement/createEmployee/createEmployee.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppOverviewComponent,
  },
  {
    path: 'employeeManagement',
    component: EmployeeManagementComponent,
  },
  {
    path: 'employeeManagement/create',
    component: CreateEmployeeComponent,
  },
  // {
  //   path: 'employeeManagement/edit/:id',
  //   component: EditEmployeeComponent,
  // },
  {
    path: 'employeeManagement/details/:id',
    component: EmployeeDetailsComponent,
  },
  {
    path: '**',
    // pathMatch: 'full',
    redirectTo: '',
  },
];
