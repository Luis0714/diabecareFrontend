import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DataHistory, DataHistoryCreate, Patient, PatientBackend } from '../models/patient.model';
import { CustomResponse } from '../models/customresponse.models';
import { UserLoginModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  http = inject(HttpClient);
  storageService = inject(StorageService);

  server = environment.server;

  url = `${this.server}/pacientes`;

  getPatientsByUserProfesional(userId: number): Observable<CustomResponse<PatientBackend[]>> {
    return this.http.get<CustomResponse<PatientBackend[]>>(`${this.url}/patients_by_health_professional/${userId}`);
  }

  getPatientById(patientId: number): Observable<CustomResponse<UserLoginModel>> {
    return this.http.get<CustomResponse<UserLoginModel>>(`${this.url}/patient_by_id/${patientId}`);
  }

  createDataHistory(dataHistory: DataHistoryCreate): Observable<CustomResponse<DataHistory>>{
    return this.http.post<CustomResponse<DataHistory>>(`${this.url}/create_patient_histories`, dataHistory);
  }
}
