import { Injectable, inject } from '@angular/core';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  loadingController = inject(LoadingController);
  toastController = inject(ToastController);

  async loading(message: string){
    const loading = await this.loadingController.create({
      message: message,
      spinner: 'crescent',
    });
    await loading.present();
    return loading;
  }

  async toast(options: ToastOptions){
    const toast = await this.toastController.create(options);
    toast.present();
  }
}
