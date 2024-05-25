import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-custom-footer',
  templateUrl: './custom-footer.component.html',
  styleUrls: ['./custom-footer.component.scss'],
  standalone: true,
  imports: [IonButton]
})
export class CustomFooterComponent  implements OnInit {

  routers = inject(Router);
  ngOnInit() {}

  goToPatients() {
    this.routers.navigateByUrl('home/patients/1');
  }

  goToPlan() {
    this.routers.navigateByUrl('home/create-plan');
  }

}
