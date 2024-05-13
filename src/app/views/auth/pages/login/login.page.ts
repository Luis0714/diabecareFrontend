import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { CustomHeaderComponent } from 'src/app/shared/components/custom-header/custom-header.component';
import { CustomInputComponent } from 'src/app/shared/components/custom-input/custom-input.component';
import { CustomLogoComponent } from 'src/app/shared/components/custom-logo/custom-logo.component';
import { CustomButtonComponent } from 'src/app/shared/components/custom-button/custom-button.component';
import { ICONS } from 'src/app/shared/constans/icons.contants';
import { UtilsService } from 'src/app/core/services/utils.service';
import { MESSAGES } from 'src/app/shared/constans/messages.constans';
import { timeout } from 'rxjs';
import { TOAST_CONST } from 'src/app/shared/constans/toast.consts';
import { TIMES } from 'src/app/shared/constans/times.constants';
import { HomePage } from 'src/app/views/domain/pages/home/home.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButtons,
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
    CustomLogoComponent
  ]
})
export class LoginPage {

  utilsService = inject(UtilsService);
  icons = ICONS;
  messages = MESSAGES;
  toastConst = TOAST_CONST;
  times = TIMES;

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
