import { Injectable } from '@angular/core';
import { UserLoginModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    const token = localStorage.getItem('token')
    if (token) {
      return token;
    }
    return '';
  }

  saveUser(user: UserLoginModel){
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): UserLoginModel | null {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  clearStorage(){
    localStorage.clear();
  }
}
