import { Component, OnInit, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ActionPerformed, PushNotificationSchema, PushNotifications, Token } from '@capacitor/push-notifications';
import { StorageServiceService } from './storage-service.service';
import { GENERAL_CONSTANTS } from './shared/constants/generals.constants';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  deviceId = '';
  storageService = inject(StorageServiceService);
  ngOnInit(): void {
    this.initNotifications();
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
