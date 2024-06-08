import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CustomResponse } from '../models/customresponse.models';
import { HealtProfessioanl } from '../models/healt-professional.model';

@Injectable({
  providedIn: 'root'
})
export class HealthProfessionalService {
  http = inject(HttpClient);
  storageService = inject(StorageService);
  server = environment.server;

  url = `${this.server}/health_professional`;

  getHealthProfessionalById(healthProfessionalId: number): Observable<CustomResponse<HealtProfessioanl>> {
    return this.http.get<CustomResponse<HealtProfessioanl>>(`${this.url}/get_health_professional_id_by_user_id/${healthProfessionalId}`);
  }
}
