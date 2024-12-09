import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { OptionsComponent } from '../../components/options/options.component';
import { Options2Component } from '../../components/options2/options2.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fitness',
  standalone: true,
  imports: [MenuComponent, OptionsComponent, Options2Component],
  templateUrl: './fitness.component.html',
  styleUrl: './fitness.component.css'
})
export class FitnessComponent {

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/plan']);
  }

}
