import { Routes } from '@angular/router';
import { loginGuard } from './core/guards/login.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./views/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'domain',
    loadChildren: () => import('./views/domain/domain.routes').then((m) => m.DOMAIN_ROUTES),
  },
  {
    path: 'home',
    loadChildren: () => import('./views/domain/domain.routes').then((m) => m.DOMAIN_ROUTES),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
