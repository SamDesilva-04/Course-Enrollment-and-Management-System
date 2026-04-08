import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
// Notice the path now ends in .service
import { DataService, Student } from '../../services/data.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit {
  students: Student[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.students = this.dataService.getStudents();
  }
}