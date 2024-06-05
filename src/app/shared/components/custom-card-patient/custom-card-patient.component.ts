import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/core/models/patient.model';
import {IonCard, IonCardSubtitle, IonCardTitle,
        IonCardHeader, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { DatePipe } from '../../pipes/date.pipe';
import { GlucosePipe } from '../../pipes/glucose.pipe';
import { ICONS } from '../../constants/icons.constants';
import { COLORS } from '../../constants/colors.constans';
import { AgePipe } from '../../pipes/age.pipe';
import { HoursPipe } from '../../pipes/hours.pipe';
import { PdfService } from 'src/app/core/services/pdf.service';

@Component({
  selector: 'app-custom-card-patient',
  templateUrl: './custom-card-patient.component.html',
  styleUrls: ['./custom-card-patient.component.scss'],
  standalone: true,
  imports: [IonIcon,
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
export class CustomCardPatientComponent  implements OnInit {
  pdfService = inject(PdfService);
  x: String = '';
  y: String = '';

  @Input({required: true}) patient!: Patient;
  icons = ICONS;
  colors = COLORS;
  router = inject(Router);
  ngOnInit() { }

  createPlan(){
    this.router.navigateByUrl(`home/create-plan/${this.patient.patientId}`);
  }

  generateReport() {
    this.pdfService.generateReport(this.patient.patientId).subscribe((response: Blob) => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(response);
      a.href = objectUrl;
      let date = this.todayDate();
      a.download = `Reporte_${date}_${this.patient.name} ${this.patient.lastName}.pdf`;
      console.log(objectUrl);
      a.click();
      URL.revokeObjectURL(objectUrl);
    }, error => {
      console.error('Error al generar el reporte', error);
    });
  }

  todayDate() {
    let currentDate = new Date();
    let formattedDate = `${currentDate.getDate()}-${currentDate.getMonth()+1}-${currentDate.getFullYear()}`;
    return formattedDate;
  }
}
