import { Component, OnInit, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { NotificationPushService } from './core/services/notification-push.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {

  notificationService = inject(NotificationPushService);

  ngOnInit(): void {
    this.notificationService.initNotifications();
  }

}
