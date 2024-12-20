import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormInputFieldComponent } from './formInputField.component';

describe('FormInputFieldComponent', () => {
  let component: FormInputFieldComponent;
  let fixture: ComponentFixture<FormInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormInputFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
