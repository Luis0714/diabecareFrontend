import { Component, Input, OnInit } from '@angular/core';
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
export class CustomButtonComponent implements OnInit {

  @Input() disable: boolean = false;
  @Input() text: string = 'Button';
  @Input() color: string = '#F68F5D';
  @Input() width: string = '100%';
  @Input() leftIcon: string = '';
  @Input() rightIcon: string = '';
  @Input() colorRightIcon: string = '#ffffff';
  @Input() colorLeftIcon: string = '#ffffff';
  @Input() type: string = 'solid';

  fillButton: string = 'solid';

  ngOnInit(): void {
    this.defineFillButton();
  }


  defineFillButton(){
    if(this.type === 'outline'){
      this.fillButton = 'outline';
    }
  }
}
