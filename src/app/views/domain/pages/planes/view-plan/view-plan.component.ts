import { Component, OnInit, inject } from '@angular/core';
import {
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonFooter,
  IonToolbar,
  IonContent,
  IonCard,
} from '@ionic/angular/standalone';
import { CustomButtonComponent } from 'src/app/shared/components/custom-button/custom-button.component';
import { CustomFooterComponent } from 'src/app/shared/components/custom-footer/custom-footer.component';
import { CustomHeaderComponent } from 'src/app/shared/components/custom-header/custom-header.component';
import { ICONS } from 'src/app/shared/constants/icons.constants';
import { CustomCardPlanComponent } from 'src/app/shared/components/custom-card-plan/custom-card-plan.component';
import { StorageService } from 'src/app/core/services/storage.service';
import { PersonalizedPlanService } from 'src/app/core/services/personalized-plan.service';
import { PersonalizedPlanResponse } from 'src/app/core/models/personalized-plan.model';
import { CustomNotFoundComponent } from 'src/app/shared/components/custom-not-found/custom-not-found.component';

@Component({
  selector: 'app-view-plan',
  templateUrl: './view-plan.component.html',
  styleUrls: ['./view-plan.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonToolbar,
    IonFooter,
    IonIcon,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    CustomButtonComponent,
    CustomFooterComponent,
    CustomHeaderComponent,
    CustomCardPlanComponent,
    CustomNotFoundComponent,
  ],
})
export class ViewPlanComponent implements OnInit {
  plans: PersonalizedPlanResponse[] = [];
  personalizedPlansService = inject(PersonalizedPlanService);
  storageService = inject(StorageService);
  icons = ICONS;

  constructor() {}

  ngOnInit() {
    this.get_plans();
  }

  get_plans() {
    const iduser = this.storageService.getUser()?.id;
    this.personalizedPlansService
      .getPersonalizedPlans(iduser)
      .subscribe((data) => {
        this.plans = data.data;
      });
  }
}
