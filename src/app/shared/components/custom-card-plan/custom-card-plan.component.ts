import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon } from "@ionic/angular/standalone";
import { IonCard } from "@ionic/angular/standalone";
import { PersonalizedPlanResponse } from 'src/app/core/models/personalized-plan.model';
import { CustomButtonComponent } from 'src/app/shared/components/custom-button/custom-button.component';
import { DatePipe } from '../../pipes/date.pipe';

@Component({
  selector: 'app-custom-card-plan',
  templateUrl: './custom-card-plan.component.html',
  styleUrls: ['./custom-card-plan.component.scss'],
  standalone: true,
  imports: [IonIcon, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard,CustomButtonComponent,DatePipe]
})
export class CustomCardPlanComponent {
  @Input ({required: true}) plan!: PersonalizedPlanResponse;

  router = inject(Router);

  goToRecommendations(){
    this.router.navigateByUrl(`/home/view-recommendations/${this.plan.plan_Id}`);
  }

}
