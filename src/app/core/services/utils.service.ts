import { Injectable, inject } from '@angular/core';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ICONS } from 'src/app/shared/constants/icons.constants';
import { TIMES } from 'src/app/shared/constants/times.constants';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  loadingController = inject(LoadingController);
  toastController = inject(ToastController);
  alertController = inject(AlertController);
  icons = ICONS;
  times = TIMES;

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

  private async  alert(message: string){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }


  async presentAlert(message: string, color: string, icon: string) {
    await this.toast({
      message: message,
      duration: this.times.short,
      color: color,
      icon: this.icons.alertCircle,
      position: 'top'
    });
  }
}
