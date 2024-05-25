import { Component, OnInit, inject } from '@angular/core';
import { CustomFooterComponent } from 'src/app/shared/components/custom-footer/custom-footer.component';
import { CustomHeaderComponent } from 'src/app/shared/components/custom-header/custom-header.component';
import { IonContent, IonTitle, IonFooter, IonToolbar } from "@ionic/angular/standalone";
import { UserLoginModel } from 'src/app/core/models/user.model';
import { StorageService } from 'src/app/core/services/storage.service';
import { Patient } from 'src/app/core/models/patient.model';
import { PatientsService } from 'src/app/core/services/patients.service';
import { CustomCardPatientComponent } from 'src/app/shared/components/custom-card-patient/custom-card-patient.component';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.scss'],
  standalone: true,
  imports: [IonTitle, IonContent, CustomHeaderComponent, CustomFooterComponent, IonFooter, IonToolbar, CustomCardPatientComponent]
})
export class ListPatientsComponent  implements OnInit {
  user!: UserLoginModel | null;
  storageService = inject(StorageService);
  patientsService = inject(PatientsService);
  patients: Patient[] = [];

  constructor() { 
    this.getUserLogged();
  }

  ngOnInit() {
    this.getUserLogged();
    this.getPatients();
  }

  getUserLogged() {
    this.user =  this.storageService.getUser();
  }

  getPatients() {
    if(this.user) {
      this.patientsService.getPatientsByUserProfesional(this.user.usuarioId).subscribe((patients) => {
        for (let index = 0; index < patients.data.length; index++) {
          let patient: Patient = {
              patientId: patients.data[index].patient_id,
              name: patients.data[index].name,
              lastName: patients.data[index].last_name,
              date: patients.data[index].date,
              photo: patients.data[index].photo,
              age: patients.data[index].age,
              glucoseLevel: patients.data[index].glucose_level,
              lastMedication: patients.data[index].last_medication,
              physicalActivityHours:patients.data[index].physical_activity_hours,
              lastMeal: patients.data[index].last_meal
        }
        this.patients.push(patient);
      }
      });
    }
  }
}
