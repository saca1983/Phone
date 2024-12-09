import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/account']);
  }

  onLogin2() {
    this.router.navigate(['/objetives']);
  }

  onLogin3() {
    this.router.navigate(['/plan']);
  }

  onLogin4() {
    this.router.navigate(['/progress']);
  }

  onLogin5() {
    this.router.navigate(['/completed']);
  }
}
