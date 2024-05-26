import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { ICONS } from '../../constants/icons.constants';
import { UserLoginModel } from 'src/app/core/models/user.model';
import { StorageService } from 'src/app/core/services/storage.service';
import { CustomLogoComponent } from '../custom-logo/custom-logo.component';
import { ROLES } from '../../constants/roles.constants';

@Component({
  selector: 'app-custom-footer',
  templateUrl: './custom-footer.component.html',
  styleUrls: ['./custom-footer.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, CustomLogoComponent]
})
export class CustomFooterComponent  implements OnInit {
  icons = ICONS;
  roles = ROLES;
  routers = inject(Router);
  user!: UserLoginModel | null;
  storageService = inject(StorageService);
  ngOnInit() {
    this.getUserLogged();
  }

  getUserLogged() {
    this.user =  this.storageService.getUser();
  }

  goToPatients() {
    this.routers.navigateByUrl('home/patients');
  }

  goToPlan() {
    this.routers.navigateByUrl('home/create-plan');
  }

  goToHome() {
    this.routers.navigateByUrl('home');
  }

}
