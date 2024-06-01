import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonToolbar,
  IonFooter,
  IonIcon,
} from '@ionic/angular/standalone';
import { RecommendationViewModel } from 'src/app/core/models/recommendation.model';
import { CustomCardRecommendationComponent } from 'src/app/shared/components/custom-card-recommendation/custom-card-recommendation.component';
import { CustomFooterComponent } from 'src/app/shared/components/custom-footer/custom-footer.component';
import { CustomHeaderComponent } from 'src/app/shared/components/custom-header/custom-header.component';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonFooter,
    IonToolbar,
    IonContent,
    CustomFooterComponent,
    CustomHeaderComponent,
    CustomCardRecommendationComponent,
  ],
})
export class RecommendationsComponent implements OnInit {
  recommendations: RecommendationViewModel[] = [];
  constructor() {
    this.recommendations = [
      {
        recomendacionId: 1,
        titulo: 'Hacer Mas Ejercicio',
        estado: 'Sin realizar',
        actividad: 'Haz 30 minutos de ejercicio diario',
        planId: 1,
        horaEjecucion: '10:00',
      },
      {
        recomendacionId: 2,
        titulo: 'Recomendación 2',
        estado: 'Realizada',
        actividad: 'coma frutas y verduras',
        planId: 2,
        horaEjecucion: '11:00',
      },
      {
        recomendacionId: 3,
        titulo: 'Recomendación 3',
        estado: 'Activo',
        actividad: 'Actividad 3',
        planId: 3,
        horaEjecucion: '12:00',
      },
      {
        recomendacionId: 4,
        titulo: 'Recomendación 4',
        estado: 'Activo',
        actividad: 'Actividad 4',
        planId: 4,
        horaEjecucion: '13:00',
      },
    ];
  }


  ngOnInit() {}
}
