import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonIcon, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonFooter, IonContent, IonAlert, IonToast } from "@ionic/angular/standalone";
import { CustomButtonComponent } from 'src/app/shared/components/custom-button/custom-button.component';
import { CustomFooterComponent } from 'src/app/shared/components/custom-footer/custom-footer.component';
import { CustomInputComponent } from 'src/app/shared/components/custom-input/custom-input.component';
import { CustomLogoComponent } from 'src/app/shared/components/custom-logo/custom-logo.component';
import { ICONS } from 'src/app/shared/constants/icons.constants';

@Component({
  selector: 'app-register-data',
  templateUrl: './register-data.component.html',
  styleUrls: ['./register-data.component.scss'],
  standalone: true,
  imports: [IonToast, IonAlert, IonContent, IonButton, IonBackButton, IonButtons, IonToolbar, IonHeader, IonIcon, IonTitle, 
  IonFooter, CustomFooterComponent, CustomInputComponent, CustomButtonComponent, 
  CustomLogoComponent, FormsModule, ReactiveFormsModule]
})
export class RegisterDataComponent  implements OnInit {

  icons = ICONS;
  dataForm = new FormGroup({
    glucoseLevel: new FormControl(0, [Validators.required]),
    lastMeal: new FormControl('', [Validators.required]),
    lastMedication: new FormControl('', [Validators.required]),
    physicalActivityHours: new FormControl(0, [Validators.required])
  });
  constructor() { }

  ngOnInit() {}

}
