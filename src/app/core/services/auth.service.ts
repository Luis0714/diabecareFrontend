import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credentials } from './../models/credentials.model';
import { Observable } from 'rxjs';
import { CustomResponse } from '../models/customresponse.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server = environment.server;
  url = `${this.server}/account`;

  http = inject(HttpClient);

  login(credentials:Credentials):Observable<CustomResponse<string>>{
    return this.http.post<CustomResponse<string>>(`${this.url}/login`, credentials);
  }

}
