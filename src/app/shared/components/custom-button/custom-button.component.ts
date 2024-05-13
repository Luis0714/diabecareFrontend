import { Component, Input } from '@angular/core';
import { IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  standalone: true,
  imports: [IonIcon,
    IonButton
  ]
})
export class CustomButtonComponent{
  @Input() disable: boolean = false;
  @Input() text: string = 'Button';
  @Input() color: string = 'primary';
  @Input() width: string = '100%';
  @Input() leftIcon: string = '';
  @Input() rightIcon: string = '';
  @Input() colorRightIcon: string = '#ffffff';
  @Input() colorLeftIcon: string = '#ffffff';
}
