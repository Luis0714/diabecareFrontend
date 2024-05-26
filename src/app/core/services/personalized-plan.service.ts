import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';
import { PersonalizedPlan } from '../models/personalized-plan.model';

@Injectable({
  providedIn: 'root'
})
export class PersonalizedPlanService {

  http = inject(HttpClient);
  storageService = inject(StorageService);

  server = environment.server;

  url = `${this.server}/personalized_planes`;

  createPersonalizedPlan(plan: PersonalizedPlan): any {
    return this.http.post(`${this.url}/planes_personalizados`, plan);
  }
}
