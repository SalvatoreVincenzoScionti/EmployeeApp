import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IEmployee } from '../models/employee.model';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IButton } from '../models/button.model';
import { Router } from '@angular/router';
import { ButtonMode } from '../enums/button-mode';

@Injectable({
  providedIn: 'root',
})
export class EmployeeManagementService {
  private _api = 'http://localhost:3000/api/employees';
  private _employeeList$$ = new BehaviorSubject<IEmployee[]>([]);
  router = inject(Router);

  public VIEW_BUTTON: IButton = {
    title: 'view',
    buttonMode: ButtonMode.Regular,
    onClick: (_id) =>
      this.router.navigateByUrl(`employeeManagement/details/${_id}`),
  };

  constructor(private _httpClient: HttpClient) {
    this.loadEmployeeList();
  }

  getEmployeeList(): Observable<IEmployee[]> {
    return this._employeeList$$.asObservable();
  }

  loadEmployeeList(): void {
    this._httpClient.get<IEmployee[]>(this._api).subscribe((data) => {
      this._employeeList$$.next(data);
    });
  }

  delete(_id: string): Observable<IEmployee> {
    return this._httpClient.delete<IEmployee>(`${this._api}/${_id}`).pipe(
      tap(() => {
        this.loadEmployeeList();
      })
    );
  }
}
