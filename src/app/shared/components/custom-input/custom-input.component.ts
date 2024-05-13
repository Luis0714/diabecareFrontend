import { Component, Input, OnInit, input } from '@angular/core';
import { FormControl, FormControlName, ReactiveFormsModule } from '@angular/forms';
import { IonLabel, IonItem, IonInput, IonIcon, IonButton } from "@ionic/angular/standalone";
import { ICONS } from '../../constans/icons.contants';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  standalone: true,
  imports:[
    ReactiveFormsModule,
    IonItem,
    IonInput,
    IonIcon,
    IonButton
  ]
})
export class CustomInputComponent implements OnInit{

  @Input({required:true}) control!: FormControl;
  @Input({required: true}) type!: string;
  label = input.required<string>();
  autoComplete = input<string>();
  icon = input<string>();

  isPassword!: boolean;
  hide: boolean = true;

  icons = ICONS;
  ngOnInit(){
    this.verifyShowIconEye();
  }

  showOrHidePassword(){
    this.hide = !this.hide;
    if(this.hide) this.type = 'password';
    else this.type = 'text';
  }

  verifyShowIconEye(){
    if(this.type === 'password') this.isPassword = true;
  }
}
