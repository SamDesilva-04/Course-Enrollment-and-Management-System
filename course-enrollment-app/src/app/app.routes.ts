import { Routes } from '@angular/router';

// FIX: Importing from the correct file names and folders
import { StudentList } from './components/student-list/student-list';
import { CourseList } from './components/course-list/course-list';
import { EnrollList } from './components/enroll-list/enroll-list'; 

export const routes: Routes = [
  // Default path: Redirect to students list
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  
  // Route definitions
  { path: 'students', component: StudentList },
  { path: 'courses', component: CourseList },
  { path: 'enroll', component: EnrollList }
];