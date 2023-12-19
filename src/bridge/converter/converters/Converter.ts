import { Employee } from '../employees/Employee';

export interface Converter {
  getEmployeeFormated(emp: Employee): string;
}
