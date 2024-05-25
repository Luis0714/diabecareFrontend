import { HttpHandlerFn, HttpInterceptorFn } from '@angular/common/http';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
  HttpContext
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { inject } from '@angular/core';

const ADD_TOKEN = new HttpContextToken<boolean>(() => false);

export function addToken() {
  return new HttpContext().set(ADD_TOKEN, true);
}

function addTokenToRequest(request: HttpRequest<unknown>, next: HttpHandlerFn) {
  const storageService = inject(StorageService)
  const token = storageService.getToken();

  if (token) {
    const authRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    })
    return next(authRequest);
  }
  return next(request);
}

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.context.get(ADD_TOKEN)) {
    return addTokenToRequest(req, next);
  }
  console.log("Request token", req.url)
  return next(req);
};


