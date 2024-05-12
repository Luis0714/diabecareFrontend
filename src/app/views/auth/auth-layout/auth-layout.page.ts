import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.page.html',
  styleUrls: ['./auth-layout.page.scss'],
  standalone: true,
  imports: [IonRouterOutlet,
            IonContent,
            IonHeader,
            IonTitle,
            IonToolbar,
            CommonModule,
            FormsModule]
})
export class AuthLayoutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
