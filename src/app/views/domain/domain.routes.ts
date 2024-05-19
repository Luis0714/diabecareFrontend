import { Routes } from "@angular/router";
import { DomainLayoutPage } from "./domain-layout/domain-layout.page";


export const DOMAIN_ROUTES: Routes = [
  {
    path: '',
    component: DomainLayoutPage,
    children: [
      {
        path: 'eduContent',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage)
      },
      {
        path: '',
        redirectTo: 'eduContent',
        pathMatch: 'full'
      }
    ]

  }
]
