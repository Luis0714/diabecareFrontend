import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/core/models/patient.model';
import {
  IonCard, IonCardSubtitle, IonCardTitle,
  IonCardHeader, IonCardContent, IonIcon, IonToast
} from '@ionic/angular/standalone';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { DatePipe } from '../../pipes/date.pipe';
import { GlucosePipe } from '../../pipes/glucose.pipe';
import { ICONS } from '../../constants/icons.constants';
import { COLORS } from '../../constants/colors.constans';
import { AgePipe } from '../../pipes/age.pipe';
import { HoursPipe } from '../../pipes/hours.pipe';
import { PdfService } from 'src/app/core/services/pdf.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { UserLoginModel } from 'src/app/core/models/user.model';
import { MESSAGES } from '../../constants/messages.constants';
import { Platform } from '@ionic/angular';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-custom-card-patient',
  templateUrl: './custom-card-patient.component.html',
  styleUrls: ['./custom-card-patient.component.scss'],
  standalone: true,
  imports: [IonToast, IonIcon,
    IonCard,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonIcon,
    CustomButtonComponent,
    DatePipe,
    GlucosePipe,
    AgePipe,
    HoursPipe
  ]
})
export class CustomCardPatientComponent implements OnInit {
  pdfService = inject(PdfService);
  private platform = inject(Platform);

  @Input({ required: true }) patient!: Patient;
  icons = ICONS;
  colors = COLORS;
  router = inject(Router);
  storageService = inject(StorageService);
  user: UserLoginModel | null = null;
  message: string = '';

  constructor() {

  }

  isToastOpen = false;
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
  showToast() {
    this.message = MESSAGES.success.generateReport;
    this.setOpen(true);
  }

  ngOnInit() {
    this.getUserLogged();
  }

  createPlan() {
    this.router.navigateByUrl(`home/create-plan/${this.patient.patientId}`);
  }

  getUserLogged() {
    this.user = this.storageService.getUser();
  }

  async generateReport() {
    if (this.user) {
      if (this.platform.is('capacitor')) {
        await this.generateReportForMobile();
      } else {
        this.generateReportForWeb();
      }
    }
  }

  async generateReportForMobile() {
    try {
      if (this.user) {
      this.pdfService.generateReport(this.patient.patientId, this.user.id).subscribe(async (response: Blob) => { 
      const base64Data = await this.convertBlobToBase64(response);
      const date = this.todayDate();
      const fileName = `Reporte_${date}_${this.patient.name}_${this.patient.lastName}.pdf`;

      const savedFile = await Filesystem.writeFile({
        path: fileName,
        data: base64Data,
        directory: Directory.Documents,
        encoding: Encoding.UTF8
      });

      // Obtener la ruta del archivo guardado
      const filePath = savedFile.uri;

      // Abrir el archivo PDF utilizando el plugin Browser de Capacitor
      await Browser.open({ url: filePath });

      this.showToast();
      });
    }
    } catch (error) {
      console.error('Error al generar el reporte', error);
    }
  }

  async convertBlobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.readAsDataURL(blob);
    });
  }

  generateReportForWeb() {
    if (this.user) {
      this.pdfService.generateReport(this.patient.patientId, this.user?.id).subscribe((response: Blob) => {
        const a = document.createElement('a');
        const objectUrl = URL.createObjectURL(response);
        a.href = objectUrl;
        let date = this.todayDate();
        a.download = `Reporte_${date}_${this.patient.name} ${this.patient.lastName}.pdf`;
        console.log(objectUrl);
        a.click();
        URL.revokeObjectURL(objectUrl);
        this.showToast();
      }, error => {
        console.error('Error al generar el reporte', error);
      });
    }
  }

  // generateReport() {
  //   if (this.user) {
  //   this.pdfService.generateReport(this.patient.patientId, this.user?.id).subscribe((response: Blob) => {
  //     const a = document.createElement('a');
  //     const objectUrl = URL.createObjectURL(response);
  //     a.href = objectUrl;
  //     let date = this.todayDate();
  //     a.download = `Reporte_${date}_${this.patient.name} ${this.patient.lastName}.pdf`;
  //     console.log(objectUrl);
  //     a.click();
  //     URL.revokeObjectURL(objectUrl);
  //     this.showToast();
  //   }, error => {
  //     console.error('Error al generar el reporte', error);
  //   });
  // }
  // }

  todayDate() {
    let currentDate = new Date();
    let formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
    return formattedDate;
  }
}
