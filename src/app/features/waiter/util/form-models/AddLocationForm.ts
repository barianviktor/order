import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAddLocationForm } from '../form-interfaces/addLocationForm.interface';
export class AddLocationForm extends FormGroup<IAddLocationForm> {
  constructor() {
    super({
      name: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      floor_plan: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }
}
