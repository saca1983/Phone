import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-plank',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './plank.component.html',
  styleUrl: './plank.component.css'
})
export class PlankComponent {

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/weights']);
  }


}
