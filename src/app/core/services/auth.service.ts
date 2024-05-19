import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credentials } from './../models/credentials.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CustomResponse } from '../models/customresponse.models';
import { UserLoginModel } from '../models/user.model';
import { StorageService } from './storage.service';
import { addToken } from '../interceptors/jwt.interceptor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);
  storageService = inject(StorageService);

  server = environment.server;

  user = new BehaviorSubject<UserLoginModel | null>(null);
  user$ = this.user.asObservable();

  url = `${this.server}/account`;


  login(credentials:Credentials):Observable<CustomResponse<string>>{
    return this.http.post<CustomResponse<string>>(`${this.url}/login`, credentials).pipe(
      tap((response:CustomResponse<string>) => {
        this.storageService.saveToken(response.data);
        this.validateToken().subscribe();
      })
    );
  }

  validateToken(): Observable<CustomResponse<UserLoginModel>> {
    return this.http.get<CustomResponse<UserLoginModel>>(`${this.server}/validate_token`, { context: addToken() })
    .pipe(
      tap((response:CustomResponse<UserLoginModel>) =>{
        this.user.next(response.data)
      })
      );
  };

}
