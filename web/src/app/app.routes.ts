import {Routes} from '@angular/router';
import {Home} from './pages/home-page/components/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'projects',
    loadComponent: () => import('./pages/project-page/components/projects/projects').then(m => m.Projects)
  },
  { path: '**', redirectTo: '' } // fallback
];
