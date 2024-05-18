import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CustomResponse } from '../models/customresponse.models';
import { ActionPerformed, PushNotificationSchema, PushNotifications, Token } from '@capacitor/push-notifications';
import { GENERAL_CONSTANTS } from 'src/app/shared/constants/generals.constants';
import { StorageServiceService } from 'src/app/storage-service.service';


@Injectable({
  providedIn: 'root'
})
export class NotificationPushService implements OnInit{
  ngOnInit(): void {
    this.initNotifications();
  }
  http = inject(HttpClient);
  deviceId = '';
  storageService = inject(StorageServiceService);
  serverUrl = `${environment.serverNotificaction}/Notification`;

  sendMyToken(token: string) {
    return this.http.get<CustomResponse<boolean>>(`${this.serverUrl}/sendToken/${token}`);
  }

  initNotifications() {
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      } else {
        console.error('Permission denied');
      }
    });

    this.addListeners();
  }

  addListeners() {
    PushNotifications.addListener('registration', (token: Token) => {
      this.deviceId = token.value;
      console.log('Push registration success, token: ' + token.value);
      this.sendMyToken(token.value).subscribe(response => token.value +' - ' +response.message);
      this.storageService.setItem(GENERAL_CONSTANTS.DEVICE_TOKEN, token.value);
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      console.error('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
      console.log('Push received: ' + JSON.stringify(notification));
    });

    PushNotifications.addListener('pushNotificationActionPerformed', (notification: ActionPerformed) => {
      console.log('Push action performed: ' + JSON.stringify(notification));
    });
  }
}
