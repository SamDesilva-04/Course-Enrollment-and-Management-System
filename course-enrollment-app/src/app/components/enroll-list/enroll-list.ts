import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enroll-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enroll-list.html',
  styleUrl: './enroll-list.css'
})
export class EnrollList {
  message: string = '';

  confirmEnrollment() {
    this.message = 'Enrollment Successful! Student has been registered.';
  }
}