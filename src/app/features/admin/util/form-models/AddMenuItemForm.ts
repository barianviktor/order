import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IAddMenuItem } from '../form-interfaces/addMenuItem.interface';

export class AddMenuItemForm extends FormGroup<IAddMenuItem> {
  constructor() {
    super({
      category: new FormControl(null, {
        validators: [Validators.required, Validators.min(1)],
        nonNullable: false,
      }),
      image: new FormControl('', {
        nonNullable: true,
      }),
      name: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      price: new FormControl(null, { validators: [Validators.required] }),
      ingredients: new FormArray<FormControl<number>>([]),
      description: new FormControl('', {
        nonNullable: true,
      }),
    });
  }
}
