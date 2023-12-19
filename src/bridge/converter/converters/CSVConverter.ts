import { Employee } from '../employees/Employee';
import { Converter } from './Converter';

export class CSVConverter implements Converter {
  getEmployeeFormated(emp: Employee): string {
    return `${emp.name},${emp.age},${emp.salary.toFixed(2)}`;
  }
}
