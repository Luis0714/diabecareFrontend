import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomResponse } from '../models/customresponse.models';
import { RecommendationViewModel } from '../models/recommendation.model';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  http = inject(HttpClient);
  
  server = environment.server;

  url = `${this.server}/recomendations`;

  getRecommendationsByPlanId(idplan: number| undefined): Observable<CustomResponse<RecommendationViewModel[]>> {
    return this.http.get<CustomResponse<RecommendationViewModel[]>>(`${this.url}/recommendations/${idplan}`);
  }
}
