import { Injectable } from '@angular/core';
import { UserLoginModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  saveToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  getToken(): string {
    const token = sessionStorage.getItem('token')
    if (token) {
      return token;
    }
    return '';
  }

  saveUser(user: UserLoginModel){
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): UserLoginModel | null {
    const user = sessionStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }
}
