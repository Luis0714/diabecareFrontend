import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonContent,
  IonToolbar,
  IonFooter,
  IonIcon,
} from '@ionic/angular/standalone';
import { RecommendationViewModel } from 'src/app/core/models/recommendation.model';
import { RecommendationService } from 'src/app/core/services/recommendation.service';
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
  recommendationService = inject(RecommendationService);
  recommendations: RecommendationViewModel[] = [];
  planId: string|null = null;
  constructor(private route: ActivatedRoute) {

  }
ngOnInit() {
  //conseguir el planId de la url
  this.route.paramMap.subscribe((params) => {
    this.planId = params.get('planId');
    console.log(this.planId);
  });
  //obtener las recomendaciones
  this.getRecommendations();
}

getRecommendations() {
  this.recommendationService.getRecommendationsByPlanId(Number(this.planId)).subscribe((data) => {
    this.recommendations = data.data;
  });
}

}
