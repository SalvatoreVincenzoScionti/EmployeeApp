import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './createEmployee.component.html',
  styleUrl: './createEmployee.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEmployeeComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      salary: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }
}
