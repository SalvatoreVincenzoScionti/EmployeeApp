import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeButtonComponent } from './employeeButton.component';

describe('EmployeeButtonComponent', () => {
  let component: EmployeeButtonComponent;
  let fixture: ComponentFixture<EmployeeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
