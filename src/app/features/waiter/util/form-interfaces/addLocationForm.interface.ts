import { FormControl } from '@angular/forms';

export interface IAddLocationForm {
  name: FormControl<string>;
  floor_plan: FormControl<string>;
}
