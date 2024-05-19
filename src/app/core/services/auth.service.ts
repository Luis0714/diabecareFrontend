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
import { TokenModel } from '../models/token.model';

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


  login(credentials:Credentials):Observable<TokenModel>{
    return this.http.post<TokenModel>(`${this.url}/login`, credentials).pipe(
      tap((response:TokenModel) => {
        this.storageService.saveToken(response.token);
        this.validateToken().subscribe();
      })
    );
  }

  validateToken(): Observable<UserLoginModel> {
    return this.http.get<UserLoginModel>(`${this.url}/validate_token`, { context: addToken() })
    .pipe(
      tap((response:UserLoginModel) =>{
        this.user.next(response)
      })
      );
  };

}
