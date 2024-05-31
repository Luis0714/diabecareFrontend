import { Component, OnInit } from '@angular/core';
import { IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonFooter, IonToolbar, IonContent } from "@ionic/angular/standalone";
import { IonCard } from "@ionic/angular/standalone";
import { PlanModel } from 'src/app/core/models/plan.model';
import { CustomButtonComponent } from 'src/app/shared/components/custom-button/custom-button.component';
import { CustomFooterComponent } from 'src/app/shared/components/custom-footer/custom-footer.component';
import { CustomHeaderComponent } from 'src/app/shared/components/custom-header/custom-header.component';
import { ICONS } from 'src/app/shared/constants/icons.constants';
import { CustomCardPlanComponent } from 'src/app/shared/components/custom-card-plan/custom-card-plan.component';


@Component({
  selector: 'app-view-plan',
  templateUrl: './view-plan.component.html',
  styleUrls: ['./view-plan.component.scss'],
  standalone: true,
  imports: [IonContent, IonToolbar, IonFooter, IonIcon, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard,CustomButtonComponent,CustomFooterComponent,CustomHeaderComponent,CustomCardPlanComponent ]
})
export class ViewPlanComponent implements OnInit {
  plans: PlanModel[] = [];
  icons = ICONS;


  constructor() {
    this.plans = [
      {
        planId: 1,
        creation_date: new Date(),
        full_name_professional: 'Dr. Juan Pérez'
      },
      {
        planId: 2,
        creation_date: new Date(),
        full_name_professional: 'Dr. Juan Pérez'
      },
      {
        planId: 3,
        creation_date: new Date(),
        full_name_professional: 'Dr. Juan Pérez'
      },
      {
        planId: 4,
        creation_date: new Date(),
        full_name_professional: 'Dr. Juan Pérez'
      }
    ];
  }

  ngOnInit() {}
}
