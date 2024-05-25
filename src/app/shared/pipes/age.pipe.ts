import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'agePipe',
  standalone: true
})
export class AgePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    return value + ' años';
  }


}
