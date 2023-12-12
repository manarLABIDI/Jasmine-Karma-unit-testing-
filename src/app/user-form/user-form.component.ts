// src/app/user-form/user-form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userName: string = '';
  userEmail: string = '';

  submitForm() {
    
    console.log('Form submitted:', this.userName, this.userEmail);
  }
}
