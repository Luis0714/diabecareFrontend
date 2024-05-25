import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';
import { CustomResponse } from '../models/customresponse.models';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  http = inject(HttpClient);
  storageService = inject(StorageService);

  server = environment.server;

  url = `${this.server}/pacientes`;
  
  getPatientsByUserProfesional(userId: number): Observable<any> {
    return this.http.get(`${this.url}/pacientes_por_profesional/${userId}`);
  }
}
