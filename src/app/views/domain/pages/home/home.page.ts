import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToast, IonTitle, IonToolbar, IonCol, IonCardHeader, IonItem, IonList, IonCardContent, IonButton, IonAlert, IonFooter } from '@ionic/angular/standalone';
import { CustomHeaderComponent } from 'src/app/shared/components/custom-header/custom-header.component';
import { ICONS } from 'src/app/shared/constants/icons.constants';
import { MESSAGES } from 'src/app/shared/constants/messages.constants';
import { TOAST_CONST } from 'src/app/shared/constants/toast.constants';
import { UtilsService } from 'src/app/core/services/utils.service';
import { UserLoginModel } from './../../../../core/models/user.model';
import { StorageService } from 'src/app/core/services/storage.service';
import { CustomFooterComponent } from 'src/app/shared/components/custom-footer/custom-footer.component';
import { NotificationPushService } from 'src/app/core/services/notification-push.service';
import { tokenDevice } from 'src/app/core/models/token-device.model';
import { ROLES } from 'src/app/shared/constants/roles.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonFooter, IonAlert, IonButton, IonCardContent, IonList, IonItem, IonCardHeader, IonCol, IonContent,
     IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
      CustomHeaderComponent, IonToast, CustomFooterComponent]
})

export class HomePage implements OnInit {

  icons = ICONS;
  messages = MESSAGES;
  toastConst = TOAST_CONST;
  utilsService = inject(UtilsService);
  storageService = inject(StorageService);
  notificationService = inject(NotificationPushService);
  router: Router = inject(Router);
  isToastOpen = false;
  roles = ROLES;

  goToRegister() {
    this.router.navigateByUrl('home/register-data');
  }

  user!: UserLoginModel | null;
  constructor() {
    this.getUserLogged();
  }

  ngOnInit() {
    this.getUserLogged();
    this.saveToken();
  }

  saveToken() {
    let userId = this.storageService.getUser()?.id;
    let token = this.storageService.getDeviceToken();
    let tokenDevice: tokenDevice = {
      token: token,
      userId: userId
    };
    console.log("send save token");
    console.log(tokenDevice);
    this.notificationService.saveTokenDevice(tokenDevice).subscribe((response) => {
      console.log("response save token", response);
    });
  }

  getUserLogged() {
    this.user =  this.storageService.getUser();
  }

}

