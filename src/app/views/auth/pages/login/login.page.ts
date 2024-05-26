import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonLoading, IonHeader, IonTitle, IonToolbar, IonButtons, IonIcon, IonButton } from '@ionic/angular/standalone';
import { CustomHeaderComponent } from 'src/app/shared/components/custom-header/custom-header.component';
import { CustomInputComponent } from 'src/app/shared/components/custom-input/custom-input.component';
import { CustomLogoComponent } from 'src/app/shared/components/custom-logo/custom-logo.component';
import { CustomButtonComponent } from 'src/app/shared/components/custom-button/custom-button.component';
import { UtilsService } from 'src/app/core/services/utils.service';

import { ICONS } from 'src/app/shared/constants/icons.constants';
import { MESSAGES } from 'src/app/shared/constants/messages.constants';
import { TOAST_CONST } from 'src/app/shared/constants/toast.constants';
import { TIMES } from 'src/app/shared/constants/times.constants';
import { BACKEND } from 'src/app/shared/constants/backend';
import { CustomCardPatientComponent } from 'src/app/shared/components/custom-card-patient/custom-card-patient.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { Credentials } from 'src/app/core/models/credentials.model';
import { NotificationPushService } from 'src/app/core/services/notification-push.service';
import { Router } from '@angular/router';
import { COLORS } from 'src/app/shared/constants/colors.constans';
import { environment } from 'src/environments/environment.prod';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonLoading,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomHeaderComponent,
    CustomInputComponent,
    CustomLogoComponent,
    CustomButtonComponent,
    CustomLogoComponent,
    CustomCardPatientComponent,
    CustomLogoComponent,
  ]
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getTokenDevice();
    this.text.set(environment.server);
    console.log("started...");
  }

  utilsService = inject(UtilsService);
  authService = inject(AuthService);
  storageService = inject(StorageService);
  notificationService = inject(NotificationPushService);
  icons = ICONS;
  messages = MESSAGES;
  colors = COLORS;
  toastConst = TOAST_CONST;
  times = TIMES;
  patients = BACKEND.patients;
  tokenDevice = signal<string>('Token');
  viewToken: boolean = false;
  text = signal<string>(' -- ');

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    token: new FormControl('', [])
  });

   login() {
    console.log('login');

    if (this.loginForm.valid) {
      const credentials = this.loginForm.value as Credentials;
      const credential:Credentials = {
        password: credentials.password,
        email: credentials.email
      }

      this.authService.login(credential).subscribe(async response => {
        if (response.statusCode === 200) {
          this.router.navigate(['/home']);
        } else {
          this.utilsService.presentAlert(this.messages.error.loginError, this.toastConst.colors.alert, this.icons.alertCircle);
        }
      }
      )
    }
  }

  getTokenDevice() {
    const device = this.storageService.getDeviceToken();
    this.tokenDevice.set(device?.toString() || 'Token not found');
  }

  showToken() {
    this.loginForm.patchValue({
      token: this.tokenDevice()
    });
    this.viewToken = true;
  }
}
