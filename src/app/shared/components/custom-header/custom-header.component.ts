import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonBackButton, IonButtons,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    IonBackButton,

  ]
})
export class CustomHeaderComponent{
  title = input.required<string>();
  routeBack = input<string>();
}
