import { Component, Input, OnInit } from '@angular/core';
import { RecommendationViewModel } from 'src/app/core/models/recommendation.model';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-card-recommendation',
  templateUrl: './custom-card-recommendation.component.html',
  styleUrls: ['./custom-card-recommendation.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard,CommonModule ]
})
export class CustomCardRecommendationComponent {

  @Input ({required: true}) recommendation!: RecommendationViewModel;


  constructor() { }


  setColorState(estado: string): string {
    if (estado === 'Sin realizar') {
      return 'color-state-Sin-realizar';
    } else if (estado === 'Realizada') {
      return 'color-state-Realizada';
    } else {
      return 'color-state-En-proceso';
    }
  }

  setColorStateText(estado: string): string {
    if (estado === 'Sin realizar') {
      return 'color-state-text-Sin-realizar';
    } else if (estado === 'Realizada') {
      return 'color-state-text-Realizada';
    } else {
      return 'color-state-text-En-proceso';
    }
  }

  convertToTime(dateString: string): Date {
    const [hours, minutes, seconds] = dateString.split(':').map(Number);
    const now = new Date();
    now.setHours(hours, minutes, seconds, 0);
    return now;
  }


}
