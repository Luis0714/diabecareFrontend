import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthProfessionalService {
  http = inject(HttpClient);
  storageService = inject(StorageService);
  server = environment.server;

  url = `${this.server}/health_professional`;

  getHealthProfessionalById(healthProfessionalId: number): Observable<any> {
    return this.http.get(`${this.url}/get_health_professional_id_by_user_id/${healthProfessionalId}`);
  }
}
