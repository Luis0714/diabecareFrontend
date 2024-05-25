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
            
              fullName: patients.data[index].nombre_completo,
              date: patients.data[index].fecha_actualizacion,
              photo: patients.data[index].foto,
              age: patients.data[index].edad,
              glucoseLevel: patients.data[index].nivel_glucosa,
              lastMedication: patients.data[index].medicamento,
              physicalActivityHours:patients.data[index].actividad_fisica,
              lastMeal: patients.data[index].ultima_comida
        }
        this.patients.push(patient);
      }
      });
    }
  }
}
