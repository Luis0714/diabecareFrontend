import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonCardHeader, IonItem, IonList, IonCardContent } from '@ionic/angular/standalone';
import { CustomHeaderComponent } from 'src/app/shared/components/custom-header/custom-header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonList, IonItem, IonCardHeader, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CustomHeaderComponent]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
