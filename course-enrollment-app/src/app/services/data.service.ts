import { Injectable } from '@angular/core';

// --- 1. Define Interfaces Here ---
export interface Student {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

export interface Course {
  id: number;
  title: string;
  credits: number;
}

// --- 2. Define the Service Class ---
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Mock Data
  private students: Student[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', isActive: true },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', isActive: false },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', isActive: true }
  ];

  private courses: Course[] = [
    { id: 101, title: 'Introduction to Angular', credits: 3 },
    { id: 102, title: 'TypeScript Fundamentals', credits: 2 },
    { id: 103, title: 'Web Development Bootcamp', credits: 4 }
  ];

  constructor() { }

  // Methods to get data
  getStudents(): Student[] {
    return this.students;
  }

  getCourses(): Course[] {
    return this.courses;
  }
}