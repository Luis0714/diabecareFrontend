import { Component, OnInit } from '@angular/core';
import { IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon } from "@ionic/angular/standalone";
import { IonCard } from "@ionic/angular/standalone";
import { CustomButtonComponent } from 'src/app/shared/components/custom-button/custom-button.component';
import { CustomFooterComponent } from 'src/app/shared/components/custom-footer/custom-footer.component';
import { CustomHeaderComponent } from 'src/app/shared/components/custom-header/custom-header.component';
import { ICONS } from 'src/app/shared/constants/icons.constants';


@Component({
  selector: 'app-view-plan',
  templateUrl: './view-plan.component.html',
  styleUrls: ['./view-plan.component.scss'],
  standalone: true,
  imports: [IonIcon, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard,CustomButtonComponent,CustomFooterComponent,CustomHeaderComponent ]
})
export class ViewPlanComponent implements OnInit {
  recommendetions: string[];
  icons = ICONS;


  constructor() {
    this.recommendetions = ['Tomar agua', 'Hacer ejercicio', 'Comer frutas'];
  }

  ngOnInit() {}
}
