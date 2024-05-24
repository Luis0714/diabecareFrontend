import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToast, IonTitle, IonToolbar, IonCol, IonCardHeader, IonItem, IonList, IonCardContent, IonButton, IonAlert } from '@ionic/angular/standalone';
import { CustomHeaderComponent } from 'src/app/shared/components/custom-header/custom-header.component';
import { ICONS } from 'src/app/shared/constants/icons.constants';
import { MESSAGES } from 'src/app/shared/constants/messages.constants';
import { TOAST_CONST } from 'src/app/shared/constants/toast.constants';
import { UtilsService } from 'src/app/core/services/utils.service';
import { UserLoginModel } from './../../../../core/models/user.model';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonAlert, IonButton, IonCardContent, IonList, IonItem, IonCardHeader, IonCol, IonContent,
     IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
      CustomHeaderComponent, IonToast]
})

export class HomePage implements OnInit {

  icons = ICONS;
  messages = MESSAGES;
  toastConst = TOAST_CONST;

  utilsService = inject(UtilsService);
  storageService = inject(StorageService);
  isToastOpen = false;



  user!: UserLoginModel | null;
  constructor() {
    this.getUserLogged();
  }

  ngOnInit() {
    this.getUserLogged();
  }

  getUserLogged() {
    this.user =  this.storageService.getUser();
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];
}
