import { FormControl } from '@angular/forms';

export interface IAddTableForm {
  name: FormControl<string>;
  sectionX: FormControl<number>;
  sectionY: FormControl<number>;
  location: FormControl<number>;
}
