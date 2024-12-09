import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-squats',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './squats.component.html',
  styleUrl: './squats.component.css'
})
export class SquatsComponent {

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/plank']);
  }

}
