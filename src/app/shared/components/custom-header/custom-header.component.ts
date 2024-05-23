import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, input, WritableSignal, signal, computed } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonIcon, IonButton } from '@ionic/angular/standalone';
import { CustomLogoComponent } from '../custom-logo/custom-logo.component';
import { StorageService } from 'src/app/core/services/storage.service';
import { UserLoginModel } from 'src/app/core/models/user.model';
import { ICONS } from '../../constants/icons.constants';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon,

  RouterLink,
    IonBackButton, IonButtons,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    CommonModule,
    IonBackButton,
    CustomLogoComponent

  ]
})
export class CustomHeaderComponent {

  title = input.required<string>();
  routeBack = input<string>();
  storageService = inject(StorageService);
  authService = inject(AuthService);
  router = inject(Router);

  icons = ICONS;
  token: string = '';


  constructor() {
    this.getToken();
  }

  getToken(){
    this.token = this.storageService.getToken();
  }

  showLogout(){
    return this.token != '' ? true : false;
  }

  logout(){
    this.authService.logOut();
    this.router.navigateByUrl('/auth/login');
    this.token = '';
  }

}
