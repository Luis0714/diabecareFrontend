import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonIcon, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonFooter, IonContent, IonAlert, IonToast } from "@ionic/angular/standalone";
import { CustomResponse } from 'src/app/core/models/customresponse.models';
import { DataHistory, DataHistoryCreate } from 'src/app/core/models/patient.model';
import { PatientsService } from 'src/app/core/services/patients.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { CustomButtonComponent } from 'src/app/shared/components/custom-button/custom-button.component';
import { CustomFooterComponent } from 'src/app/shared/components/custom-footer/custom-footer.component';
import { CustomHeaderComponent } from 'src/app/shared/components/custom-header/custom-header.component';
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
  CustomLogoComponent, FormsModule, ReactiveFormsModule, CustomHeaderComponent]
})
export class RegisterDataComponent {

  icons = ICONS;
  dataForm = new FormGroup({
    glucose_level: new FormControl(0, [Validators.required]),
    food: new FormControl('', [Validators.required]),
    medication: new FormControl('', [Validators.required]),
    hours_physical_activity: new FormControl(0, [Validators.required]),
    patient_id: new FormControl(0, []),
    user_patient_id: new FormControl(0, []),
  });
  isToastOpen = false;
  messageToast = '';
  colorToast = 'primary';
  patientService = inject(PatientsService);
  storageService = inject(StorageService);
  routerService = inject(Router);


  registerHistory() {
    if(this.dataForm.valid) {
      let formattedData: DataHistoryCreate = this.formattedData();
      this.patientService.createDataHistory(formattedData).subscribe((response) => {
        if(response) {
          this.validateResponse(response);
        }
      });
    }else{
      this.dataForm.markAllAsTouched();
    }
  }

  validateResponse(response: CustomResponse<DataHistory>) {
    if(response.statusCode === 201) {
      this.setOpen(true, response.message, 'medium');
      setTimeout(() => {
        this.navigateToHome();
      }, 4000); 
    }else {
      this.setOpen(true, response.message, 'danger');
    }
  }
  getUserId(): number | undefined{
    const user = this.storageService.getUser();
    return user?.id;
  }

  formattedData(): DataHistoryCreate {
    const data = this.dataForm.value;
    const formattedData: DataHistoryCreate = {
      glucose_level: data.glucose_level ?? 0,
      food: data.food ?? '',
      medication: data.medication ?? '',
      hours_physical_activity: data.hours_physical_activity ?? 0,
      patient_id: data.patient_id ?? 0,
      user_patient_id: this.getUserId() ?? 0,
    };
    return formattedData;
  }

  setOpen(isOpen: boolean, message: string, color: string): void {
    this.isToastOpen = isOpen;
    this.messageToast = message;
    this.colorToast = color;
  }

  navigateToHome(): void {
    this.routerService.navigate(['/home']);
  }
}
