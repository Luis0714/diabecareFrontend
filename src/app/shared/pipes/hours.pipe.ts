import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'hoursPipe',
  standalone: true
})
export class HoursPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    return value + ' horas';
  }


}
