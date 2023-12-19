import { Employee } from '../employees/Employee';
import { Converter } from './Converter';

export class JsonConverter implements Converter {
  getEmployeeFormated(emp: Employee): string {
    return `
      {
        "name": ${emp.name},
        "age": ${emp.age},
        "salary": ${emp.salary},
      }
    `;
  }
}
