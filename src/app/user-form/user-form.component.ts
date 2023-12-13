import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @ViewChild('userForm') userForm!: NgForm; // Reference to the NgForm directive

  userName: string = '';
  userEmail: string = '';

  submitForm() {
    console.log('Form submitted:', this.userName, this.userEmail);
    
    // Reset the form after submission
    if (this.userForm) {
      this.userForm.resetForm();
    }
  }
}
