// src/app/user-form/user-form.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFormComponent } from './user-form.component';
import { FormsModule } from '@angular/forms';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the form', () => {
    spyOn(console, 'log');
    component.userName = 'John Doe';
    component.userEmail = 'john.doe@example.com';
    component.submitForm();
    expect(console.log).toHaveBeenCalledWith('Form submitted:', 'John Doe', 'john.doe@example.com');
  });
});
