import { Injectable, inject } from '@angular/core';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  loadingController = inject(LoadingController);
  toastController = inject(ToastController);
  alertController = inject(AlertController);

  async loading(message: string){
    const loading = await this.loadingController.create({
      message: message,
      spinner: 'crescent',
    });
    return loading;
  }

  async toast(options: ToastOptions){
    const toast = await this.toastController.create(options);
    toast.present();
  }

  async alert(message: string){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
