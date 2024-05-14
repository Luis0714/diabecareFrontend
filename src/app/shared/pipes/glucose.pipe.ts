import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'glucosePipe',
  standalone: true
})
export class GlucosePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    return value + ' mg/dL';
  }


}
