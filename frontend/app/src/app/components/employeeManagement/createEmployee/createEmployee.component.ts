import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeManagementService } from 'src/app/services/employee-management.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './createEmployee.component.html',
  styleUrl: './createEmployee.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEmployeeComponent implements OnInit, OnDestroy {
  form!: FormGroup;

  private _router = inject(Router);
  private _subs = new Subscription();

  public empService = inject(EmployeeManagementService);

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      salary: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  onSubmit() {
    console.log('form: ', this.form.value);
    if (this.form.valid) {
      this._subs.add(this.empService.create(this.form.value).subscribe());
    }
  }

  getFormControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }
}
