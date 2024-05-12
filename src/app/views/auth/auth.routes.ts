import { Routes } from "@angular/router";
import { AuthLayoutPage } from "./auth-layout/auth-layout.page";

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthLayoutPage,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage)
      }
    ]

  }
]
