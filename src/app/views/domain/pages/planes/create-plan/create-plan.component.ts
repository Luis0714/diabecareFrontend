import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonTitle, IonFooter, IonToolbar, IonTextarea, IonAlert, IonButton, IonToast } from "@ionic/angular/standalone";
import { HealthProfessionalService } from 'src/app/core/services/health-professional.service';
import { PatientsService } from 'src/app/core/services/patients.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { CustomButtonComponent } from 'src/app/shared/components/custom-button/custom-button.component';
import { CustomFooterComponent } from 'src/app/shared/components/custom-footer/custom-footer.component';
import { CustomHeaderComponent } from 'src/app/shared/components/custom-header/custom-header.component';
import { CustomInputComponent } from 'src/app/shared/components/custom-input/custom-input.component';
import { Recommendation } from 'src/app/core/models/recommendation.model';
import { ICONS } from 'src/app/shared/constants/icons.constants';
import { PersonalizedPlanService } from 'src/app/core/services/personalized-plan.service';
import { PersonalizedPlan } from 'src/app/core/models/personalized-plan.model';
import {  MESSAGES } from 'src/app/shared/constants/messages.constants';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.scss'],
  standalone: true,
  imports: [IonButton, IonAlert, IonTextarea, IonTitle, IonContent, IonAlert ,CustomHeaderComponent,
  CustomFooterComponent, IonFooter, IonToolbar, CommonModule, FormsModule,ReactiveFormsModule,
  CustomInputComponent, CustomButtonComponent, IonToast]
})
export class CreatePlanComponent  implements OnInit {
  recommendation_count: number = 0;
  icons = ICONS;
  patientId: number = 0;
  professionalId: number = 0;
  professionalUserId: number = 0;
  patientName: string = '';
  router = inject(Router);
  patientService = inject(PatientsService);
  professionalService = inject(HealthProfessionalService);
  storageService = inject(StorageService);
  planService = inject(PersonalizedPlanService);
  recommendations: Recommendation[] = [];
  message: string = '';

  public alertButtons = [
    {
      text: 'No',
      role: 'cancel',
      handler: () => {
        this.createPlan();
      },
    },
    {
      text: 'Sí',
      role: 'confirm',
      handler: () => {
        this.planForm.reset();
      },
    },
  ];

  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  constructor(
    private route: ActivatedRoute
  ) {

  }

  planForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    activity: new FormControl('', [Validators.required]),
    executeHour: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.getInfoPatient();
    this.getProfessionalId();
  }

  getInfoPatient() {
    this.patientId = parseInt(this.route.snapshot.paramMap.get('patientId') ?? '0');
    console.log(this.patientId);
    this.patientService.getPatientById(this.patientId).subscribe((response) => {
      this.patientName = response.data.nombre + ' ' + response.data.apellidos;
    });
  }

  getProfessionalId() {
    this.getUserLogged();
    this.professionalService.getHealthProfessionalById(this.professionalUserId).subscribe((professional) => {
      this.professionalId = professional.data.profesionalSaludId;
    });
  }

  addRecommendation() {
    if(this.planForm.valid){
      let recommendation: Recommendation = {
        planId: 0,
        titulo: this.planForm.value.title ?? '',
        actividad: this.planForm.value.activity ?? '',
        horaEjecucion: this.planForm.value.executeHour ?? ''
      }
      console.log(recommendation);
      this.recommendations.push(recommendation);
      this.incrementCount();
      this.message = MESSAGES.success.addRecommendation;
      this.setOpen(true);
      console.log(this.recommendation_count);
    }
  }

  getUserLogged() {
    this.professionalUserId = this.storageService.getUser()?.id ?? 0;
  }

  createPlan() {
    let plan: PersonalizedPlan = {
      pacienteId: this.patientId,
      profesionalSaludId: this.professionalId,
      recomendaciones: this.recommendations
    }

    console.log(plan);
    if (this.recommendations.length != 0) {
      this.planService.createPersonalizedPlan(plan).subscribe((response: any) => {
        if (response.data) {
          console.log('Plan creado');
          this.showToast();
          setTimeout(() => {
            this.router.navigate(['/home/patients']);
          }, 4000); 
          this.recommendation_count = 0;
        }
      });
    }else{
      this.router.navigate(['/home/patients']);
      this.message = MESSAGES.error.createPlan;
      this.setOpen(true);
      console.log(this.isToastOpen);
    }
    
  }

  incrementCount() {
    this.recommendation_count++;
  }

  showToast() {
    this.message = MESSAGES.success.createPlan;
    this.setOpen(true);
  }
}

