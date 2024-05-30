import { Component, OnInit } from '@angular/core';
import { IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/angular/standalone";
import { IonCard } from "@ionic/angular/standalone";
import { CustomButtonComponent } from 'src/app/shared/components/custom-button/custom-button.component';


@Component({
  selector: 'app-view-plan',
  templateUrl: './view-plan.component.html',
  styleUrls: ['./view-plan.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard,CustomButtonComponent ]
})
export class ViewPlanComponent implements OnInit {
  recommendetions: string[];

  constructor() {
    this.recommendetions = ['Tomar agua', 'Hacer ejercicio', 'Comer frutas'];
  }

  ngOnInit() {}
}
