import { Component, inject } from '@angular/core';
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
  ]
})
export class LoginPage {

  utilsService = inject(UtilsService);
  icons = ICONS;
  messages = MESSAGES;
  toastConst = TOAST_CONST;
  times = TIMES;
  patients = BACKEND.patients;


  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  login(){
    console.log(this.loginForm.value);
  }

  async loading(){
    const loading = await this.utilsService.loading(this.messages.info.loading);
    timeout(this.times.long);
    loading.dismiss();
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


}
