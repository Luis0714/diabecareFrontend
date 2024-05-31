import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon } from "@ionic/angular/standalone";
import { IonCard } from "@ionic/angular/standalone";
import { PlanModel } from 'src/app/core/models/plan.model';
import { CustomButtonComponent } from 'src/app/shared/components/custom-button/custom-button.component';

@Component({
  selector: 'app-custom-card-plan',
  templateUrl: './custom-card-plan.component.html',
  styleUrls: ['./custom-card-plan.component.scss'],
  standalone: true,
  imports: [IonIcon, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard,CustomButtonComponent]
})
export class CustomCardPlanComponent  implements OnInit {
  @Input ({required: true}) plan!: PlanModel;

  router = inject(Router);

  ngOnInit() {}

  goToRecommendations(){
    this.router.navigateByUrl(`/home/view-recommendations/${this.plan.planId}`);
  }

}
