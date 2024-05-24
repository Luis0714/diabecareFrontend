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
export class NotificationPushService implements OnInit {
  ngOnInit(): void {
    this.initNotifications();
  }
  http = inject(HttpClient);
  deviceId = '';
  storageService = inject(StorageServiceService);
  serverUrl = `${environment.serverNotification}/Notification`;

  sendMyToken(token: string) {
    return this.http.get<CustomResponse<boolean>>(`${this.serverUrl}/sendToken/${token}`);
  }

  // Request permission to use push notifications
  // iOS will prompt user and return if they granted permission or not
  // Android will just grant without prompting
  initNotifications() {
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        PushNotifications.register();
        console.log('Permission granted');
      } else {
        console.log('Permission denied');
      }
    });

    this.addListeners();
  }

  addListeners() {
    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration', (token: Token) => {
      this.deviceId = token.value;
      alert('Push registration success, token: ' + token.value);
      this.storageService.setItem(GENERAL_CONSTANTS.DEVICE_TOKEN, token.value);
    });

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
       console.log('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        alert('Push received: ' + JSON.stringify(notification));
      }
    );


    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      }
    );
  }
}
