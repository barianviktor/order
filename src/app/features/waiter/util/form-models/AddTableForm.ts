import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAddTableForm } from '../form-interfaces/addTableForm.interface';

export class AddTableForm extends FormGroup<IAddTableForm> {
  constructor() {
    super({
      name: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      location: new FormControl(0, {
        validators: [Validators.required],
        nonNullable: true,
      }),
      sectionX: new FormControl(0, {
        validators: [Validators.required],
        nonNullable: true,
      }),
      sectionY: new FormControl(0, {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }
}
