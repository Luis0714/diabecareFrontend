import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonIcon, IonButton } from '@ionic/angular/standalone';
import { CustomHeaderComponent } from 'src/app/shared/components/custom-header/custom-header.component';
import { CustomInputComponent } from 'src/app/shared/components/custom-input/custom-input.component';
import { CustomLogoComponent } from 'src/app/shared/components/custom-logo/custom-logo.component';
import { CustomButtonComponent } from 'src/app/shared/components/custom-button/custom-button.component';
import { UtilsService } from 'src/app/core/services/utils.service';
import { timeout } from 'rxjs';

import { ICONS } from 'src/app/shared/constants/icons.constants';
import { MESSAGES } from 'src/app/shared/constants/messages.constants';
import { TOAST_CONST } from 'src/app/shared/constants/toast.constants';
import { TIMES } from 'src/app/shared/constants/times.constants';
import { BACKEND } from 'src/app/shared/constants/backend';
import { CustomCardPatientComponent } from 'src/app/shared/components/custom-card-patient/custom-card-patient.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { Credentials } from 'src/app/core/models/credentials.model';
import { StorageServiceService } from 'src/app/storage-service.service';
import { GENERAL_CONSTANTS } from 'src/app/shared/constants/generals.constants';

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
    CustomLogoComponent
  ]
})
export class LoginPage implements OnInit{
  ngOnInit(): void {
    this.getTokenDevice();
  }

  utilsService = inject(UtilsService);
  authService = inject(AuthService);
  storageService = inject(StorageServiceService);
  icons = ICONS;
  messages = MESSAGES;
  toastConst = TOAST_CONST;
  times = TIMES;
  patients = BACKEND.patients;
  tokenDevice = signal<string>('Token');
  viewToken: boolean = false;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    token: new FormControl('', [])
  });

  async login(){
    const loading = await this.utilsService.loading(this.messages.info.loading);
    if(this.loginForm.valid){
      await loading.present();
      const credentials = this.loginForm.value as Credentials;
      this.authService.login(credentials).subscribe(async response => {
        console.log("Respuesta general", response);
        await loading.present();
        if(response.statusCode === 202){
          await this.utilsService.toast({
            message: response.message,
            duration: this.times.medium,
            color: this.toastConst.colors.success,
            icon: this.icons.alertCircle,
            position: 'top'
          });
          loading.dismiss();
        }else{
          await this.utilsService.toast({
            message: response.message,
            duration: this.times.medium,
            color: this.toastConst.colors.error,
            icon: this.icons.alertCircle,
            position: 'top'
          });
          loading.dismiss();
        }
      }
      )
    }
  }


  async presentAlert(){
    await this.utilsService.toast({
      message: this.messages.error.required,
      duration: this.times.short,
      color: this.toastConst.colors.alert,
      icon: this.icons.alertCircle,
      position: 'top'
    });
  }

  async getTokenDevice(){
  var device = await this.storageService.getItem(GENERAL_CONSTANTS.DEVICE_TOKEN);
  this.tokenDevice.set(device?.toString() || 'Token no encontrado');
  }

  async showToken(){
    await this.utilsService.alert(this.tokenDevice());
    this.loginForm.patchValue({
      token: this.tokenDevice() || 'Token no encontrado'
    });
    this.viewToken = true;
  }


}
