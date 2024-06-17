import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';
import { PersonalizedPlan, PersonalizedPlanResponse } from '../models/personalized-plan.model';
import { Observable, catchError, of } from 'rxjs';
import { CustomResponse } from '../models/customresponse.models';

@Injectable({
  providedIn: 'root',
})
export class PersonalizedPlanService {
  http = inject(HttpClient);

  server = environment.server;

  url = `${this.server}/personalized_planes`;

  createPersonalizedPlan(plan: PersonalizedPlan): any {
    return this.http.post(`${this.url}/planes_personalizados`, plan);
  }

  getPersonalizedPlans(userId: number|undefined): Observable<CustomResponse<PersonalizedPlanResponse[]>> {
      return this.http.get<CustomResponse<PersonalizedPlanResponse[]>>(`${this.url}/planes_personalizados/${userId}`).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            return of({ data: [], statusCode: 404, message: 'Not Found' });
          }
          throw error;
        })
      );
    }
}
