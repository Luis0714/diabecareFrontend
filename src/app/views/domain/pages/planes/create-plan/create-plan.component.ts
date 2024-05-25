import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonTitle, IonFooter, IonToolbar, IonTextarea } from "@ionic/angular/standalone";
import { CustomButtonComponent } from 'src/app/shared/components/custom-button/custom-button.component';
import { CustomFooterComponent } from 'src/app/shared/components/custom-footer/custom-footer.component';
import { CustomHeaderComponent } from 'src/app/shared/components/custom-header/custom-header.component';
import { CustomInputComponent } from 'src/app/shared/components/custom-input/custom-input.component';
import { ICONS } from 'src/app/shared/constants/icons.constants';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.scss'],
  standalone: true,
  imports: [IonTextarea, IonTitle, IonContent, CustomHeaderComponent, CustomFooterComponent, IonFooter, IonToolbar, CommonModule, FormsModule,ReactiveFormsModule, CustomInputComponent, CustomButtonComponent]
})
export class CreatePlanComponent  implements OnInit {

  icons = ICONS;
  constructor(fb: FormBuilder) { 
    
  }

  loginForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    activity: new FormControl('', [Validators.required]),
    executeHour: new FormControl('', [Validators.required])
  });
  ngOnInit() {}

}

