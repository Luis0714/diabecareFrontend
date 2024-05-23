import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonCardHeader, IonItem, IonList, IonCardContent } from '@ionic/angular/standalone';
import { CustomHeaderComponent } from 'src/app/shared/components/custom-header/custom-header.component';
import { ICONS } from 'src/app/shared/constants/icons.constants';
import { MESSAGES } from 'src/app/shared/constants/messages.constants';
import { TOAST_CONST } from 'src/app/shared/constants/toast.constants';
import { UtilsService } from 'src/app/core/services/utils.service';
import { UserLoginModel } from './../../../../core/models/user.model';
import { StorageService } from 'src/app/core/services/storage.service';
import { delay, map, retryWhen, switchMap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonList, IonItem, IonCardHeader, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CustomHeaderComponent]
})

export class HomePage implements OnInit {

  icons = ICONS;
  messages = MESSAGES;
  toastConst = TOAST_CONST;

  utilsService = inject(UtilsService);
  storageService = inject(StorageService);

  user!: UserLoginModel | null;
  constructor() { this.getUserLogged();  this.showWelcomeMessage(); }

  ngOnInit() {
    this.getUserLogged();
  }

  getUserLogged() {
    this.user =  this.storageService.getUser();
  }

  showWelcomeMessage() {
    this.utilsService.presentAlert(this.messages.info.welcome, this.toastConst.colors.success, this.icons.person);
  }

}
