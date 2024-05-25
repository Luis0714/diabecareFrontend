import { Routes } from "@angular/router";
import { DomainLayoutPage } from "./domain-layout/domain-layout.page";
import { loginGuard } from "src/app/core/guards/login.guard";


export const DOMAIN_ROUTES: Routes = [
  {
    path: '',
    component: DomainLayoutPage,
    children: [
      {
        path: 'eduContent',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
        canActivate: [loginGuard]
      },
      {
        path: '',
        redirectTo: 'eduContent',
        pathMatch: 'full'
      },
      {
        path: 'patients/:id',
        loadComponent: () => import('./pages/patients/list-patients/list-patients.component').then((m) => m.ListPatientsComponent),
      },
      {
        path: 'create-plan',
        loadComponent: () => import('./pages/planes/create-plan/create-plan.component').then((m) => m.CreatePlanComponent),
      }
    ]

  }
]
