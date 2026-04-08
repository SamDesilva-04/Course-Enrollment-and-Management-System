import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'; // <--- 1. Import Material Table

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, MatTableModule], // <--- 2. Add it here
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  // 3. Define the columns we want to show
  displayedColumns: string[] = ['id', 'title', 'credits'];

  courses = [
    { id: 1, title: 'Introduction to Angular', credits: 3 },
    { id: 2, title: 'Web Development Basics', credits: 4 },
    { id: 3, title: 'Database Management', credits: 3 }
  ];
}