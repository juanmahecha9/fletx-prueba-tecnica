import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/one',
    pathMatch: 'full',
  },
  {
    path: 'one',
    loadComponent: () =>
      import('../app/views/one/one.component').then((m) => m.OneComponent),
  },
];
