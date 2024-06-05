import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  http = inject(HttpClient);
  storageService = inject(StorageService);

  server = environment.server;

  url = `${this.server}/pacientes`;

  generateReport(patientId: number): Observable<Blob> {
    return this.http.get(`${this.url}/generate_report/${patientId}`, { responseType: 'blob' });
  }
}
