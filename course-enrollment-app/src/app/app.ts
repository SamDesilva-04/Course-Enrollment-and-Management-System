import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; // <--- 1. Import this again!

import { Navbar } from './components/navbar/navbar';
import { StudentList } from './components/student-list/student-list'; 
import { CourseList } from './components/course-list/course-list';
import { EnrollList } from './components/enroll-list/enroll-list';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Add RouterOutlet to this array so the HTML <router-outlet> works
  imports: [CommonModule, RouterOutlet, Navbar, StudentList, CourseList, EnrollList], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Student Enrollment System';
}