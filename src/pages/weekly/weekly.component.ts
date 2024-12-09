import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weekly',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './weekly.component.html',
  styleUrl: './weekly.component.css'
})
export class WeeklyComponent {

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/completed']);
  }

}
