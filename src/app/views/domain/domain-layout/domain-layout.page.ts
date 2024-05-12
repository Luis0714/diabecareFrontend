import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-domain-layout',
  templateUrl: './domain-layout.page.html',
  styleUrls: ['./domain-layout.page.scss'],
  standalone: true,
  imports: [IonRouterOutlet, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DomainLayoutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
