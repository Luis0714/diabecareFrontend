import { Component, OnInit, input } from '@angular/core';
import { IonContent, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-custom-not-found',
  templateUrl: './custom-not-found.component.html',
  styleUrls: ['./custom-not-found.component.scss'],
  standalone: true,
  imports: [IonTitle, IonContent]
})
export class CustomNotFoundComponent {
  message = input.required<string>();
}
