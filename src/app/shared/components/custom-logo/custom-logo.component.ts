import { Component, input } from '@angular/core';

@Component({
  selector: 'app-custom-logo',
  templateUrl: './custom-logo.component.html',
  styleUrls: ['./custom-logo.component.scss'],
  standalone: true
})
export class CustomLogoComponent{
  heightImage = input.required<string>();
  widthImage = input.required<string>();
}
