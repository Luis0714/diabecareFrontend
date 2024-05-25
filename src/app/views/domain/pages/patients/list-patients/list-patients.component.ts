import { Component, OnInit, inject } from '@angular/core';
import { CustomFooterComponent } from 'src/app/shared/components/custom-footer/custom-footer.component';
import { CustomHeaderComponent } from 'src/app/shared/components/custom-header/custom-header.component';
import { IonContent, IonTitle, IonFooter, IonToolbar, IonSelect, IonSelectOption, IonLabel, IonItem, IonList } from "@ionic/angular/standalone";
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
  imports: [IonTitle, IonContent, CustomHeaderComponent, CustomFooterComponent, IonFooter, IonToolbar, 
  CustomCardPatientComponent, IonSelect, IonSelectOption, IonLabel, IonItem, IonList]
})
export class ListPatientsComponent  implements OnInit {
  user!: UserLoginModel | null;
  storageService = inject(StorageService);
  patientsService = inject(PatientsService);
  patients: Patient[] = [];
  filter: string = 'all';

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

  onSelectChange(event: any) {
    this.filter = event.detail.value;
    
    switch (this.filter) {
      case 'date':
        this.patients.sort((a, b) => {
          return b.date.localeCompare(a.date);
        });
        break;

      case 'age':
        this.patients.sort((a, b) => {
          return b.age - a.age;
        });
        break;

      case 'glucoseLevel':
        this.patients.sort((a, b) => {
          return a.glucoseLevel - b.glucoseLevel;
        });
        break;
    }
    
  }
}
