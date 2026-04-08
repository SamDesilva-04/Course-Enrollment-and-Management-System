import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <--- 1. Import this

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // <--- 2. Add to this list
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {}