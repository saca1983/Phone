import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { ObjectivesComponent } from '../pages/objectives/objectives.component';
import { FitnessComponent } from '../pages/fitness/fitness.component';
import { PlanComponent } from '../pages/plan/plan.component';
import { SquatsComponent } from '../pages/squats/squats.component';
import { PlankComponent } from '../pages/plank/plank.component';
import { WeightsComponent } from '../pages/weights/weights.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { WeeklyComponent } from '../pages/weekly/weekly.component';
import { CompletedComponent } from '../pages/completed/completed.component';
import { AccountComponent } from '../pages/account/account.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HomeComponent, LoginComponent, ObjectivesComponent, FitnessComponent, PlanComponent,SquatsComponent, PlankComponent, WeightsComponent, ProgressComponent, WeeklyComponent, CompletedComponent, AccountComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Phone';
}
