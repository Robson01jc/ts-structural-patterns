import { CSVConverter } from './converters/CSVConverter';
import { Converter } from './converters/Converter';
import { JsonConverter } from './converters/JsonConverter';
import { Employee } from './employees/Employee';
import { ITGuy } from './employees/ITGuy';
import { ProjectManager } from './employees/ProjectManager';

export const converterApp = {
  main(): void {
    const csvConverter: Converter = new CSVConverter();
    const jsonConverter: Converter = new JsonConverter();

    const it: Employee = new ITGuy('Maurice Moss', 32, 4000);
    const pm: Employee = new ProjectManager('Jen Barber', 40, 6000);

    console.log(csvConverter.getEmployeeFormated(it));
    console.log(jsonConverter.getEmployeeFormated(it));
    console.log(csvConverter.getEmployeeFormated(pm));
    console.log(jsonConverter.getEmployeeFormated(pm));
  },
};
