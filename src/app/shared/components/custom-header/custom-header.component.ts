import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonIcon } from '@ionic/angular/standalone';
import { CustomLogoComponent } from '../custom-logo/custom-logo.component';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
  standalone: true,
  imports: [IonIcon, 
    RouterLink,
    IonBackButton, IonButtons,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    IonBackButton,
    CustomLogoComponent

  ]
})
export class CustomHeaderComponent{
  title = input.required<string>();
  routeBack = input<string>();
}
