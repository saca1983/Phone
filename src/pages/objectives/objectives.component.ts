import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-objectives',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './objectives.component.html',
  styleUrl: './objectives.component.css'
})
export class ObjectivesComponent {

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/fitness']);
  }

}
