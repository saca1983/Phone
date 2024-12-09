import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ObjectivesComponent } from '../pages/objectives/objectives.component';
import { FitnessComponent } from '../pages/fitness/fitness.component';
import { PlanComponent } from '../pages/plan/plan.component';
import { SquatsComponent } from '../pages/squats/squats.component';
import { LoginComponent } from '../pages/login/login.component';
import { PlankComponent } from '../pages/plank/plank.component';
import { WeightsComponent } from '../pages/weights/weights.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { WeeklyComponent } from '../pages/weekly/weekly.component';
import { CompletedComponent } from '../pages/completed/completed.component';
import { AccountComponent } from '../pages/account/account.component';
import { LayoutComponent } from '../pages/layout/layout.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'objetives', component: ObjectivesComponent},
    {path: 'fitness', component: FitnessComponent},
    {path: 'plan', component: PlanComponent},
    {path: 'squats', component: SquatsComponent},
    {path: 'plank', component: PlankComponent},
    {path: 'weights', component: WeightsComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'weekly', component: WeeklyComponent},
    {path: 'completed', component: CompletedComponent},
    {path: 'account', component: AccountComponent},
    {path: 'layout', component: LayoutComponent},
];
