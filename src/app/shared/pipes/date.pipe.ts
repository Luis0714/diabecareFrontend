import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'date',
  standalone: true
})
export class DatePipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    if (!value) return '';
    const date = new Date(value);

    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const anio = date.getFullYear();

    const nombreMes = this.getMonthByNumber(mes);

    return `${dia} de ${nombreMes} de ${anio}`;
  }

  getMonthByNumber(number: number) {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return meses[number - 1];
  }
}

