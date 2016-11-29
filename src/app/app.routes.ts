import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';

export const AppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  { path: '**', component: HomeComponent }

];