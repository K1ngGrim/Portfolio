import { Routes } from '@angular/router';
import {Home} from './pages/home-page/components/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: '**', redirectTo: '' } // fallback
];
