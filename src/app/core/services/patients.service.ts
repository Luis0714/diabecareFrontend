import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DataHistory, DataHistoryCreate, Patient } from '../models/patient.model';
import { CustomResponse } from '../models/customresponse.models';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  http = inject(HttpClient);
  storageService = inject(StorageService);

  server = environment.server;

  url = `${this.server}/pacientes`;

  getPatientsByUserProfesional(userId: number): Observable<CustomResponse<Patient[]>> {
    return this.http.get<CustomResponse<Patient[]>>(`${this.url}/patients_by_health_professional/${userId}`);
  }

  getPatientById(patientId: number): Observable<any> {
    return this.http.get(`${this.url}/patient_by_id/${patientId}`);
  }

  createDataHistory(dataHistory: DataHistoryCreate): Observable<CustomResponse<DataHistory>>{
    return this.http.post<CustomResponse<DataHistory>>(`${this.url}/create_patient_histories`, dataHistory);
  }
}
