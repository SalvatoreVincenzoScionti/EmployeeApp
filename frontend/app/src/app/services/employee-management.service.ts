import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnDestroy } from '@angular/core';
import { IEmployee } from '../models/employee.model';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { IButton } from '../models/button.model';
import { Router } from '@angular/router';
import { ButtonMode } from '../enums/button-mode';

@Injectable({
  providedIn: 'root',
})
export class EmployeeManagementService implements OnDestroy {
  private _api = 'http://localhost:3000/api/employees';
  private _employeeList$$ = new BehaviorSubject<IEmployee[]>([]);
  private _subs = new Subscription();

  router = inject(Router);

  public employeeList$ = this._employeeList$$.asObservable();

  public VIEW_BUTTON: IButton = {
    title: 'view',
    buttonMode: ButtonMode.Regular,
    onClick: (_id) => {
      if (_id) {
        this.router.navigateByUrl(`employeeManagement/details/${_id}`);
      }
    },
  };

  public CREATE_BUTTON: IButton = {
    title: 'create',
    buttonMode: ButtonMode.Regular,
    onClick: (emp) => {
      if (emp) {
        this._subs.add(
          this.create(emp).subscribe((data) => {
            console.log(data);
          })
        );
      }
    },
  };

  constructor(private _httpClient: HttpClient) {
    this.loadEmployeeList();
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  getEmployeeList(): Observable<IEmployee[]> {
    return this.employeeList$;
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

  create(emp: IEmployee): Observable<IEmployee> {
    return this._httpClient
      .post<IEmployee>(`${this._api}`, emp)
      .pipe(tap(() => this.router.navigateByUrl('employeeManagement')));
  }
}
