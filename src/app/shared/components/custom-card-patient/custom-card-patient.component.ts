import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/core/models/patient.model';
import {IonCard, IonCardSubtitle, IonCardTitle,
        IonCardHeader, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { ICONS } from '../../constans/icons.contants';
import { COLORS } from '../../constans/colors.constans';
import { DatePipe } from '../../pipes/date.pipe';
import { GlucosePipe } from '../../pipes/glucose.pipe';

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
    GlucosePipe
  ]
})
export class CustomCardPatientComponent  implements OnInit {

  @Input({required: true}) patient!: Patient;
  icons = ICONS;
  colors = COLORS;
  ngOnInit() {}

}
