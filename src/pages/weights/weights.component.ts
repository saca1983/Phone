import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weights',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './weights.component.html',
  styleUrl: './weights.component.css'
})
export class WeightsComponent {

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/progress']);
  }


}
