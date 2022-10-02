import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAddCategory } from '../form-interfaces/addCategoryForm.interface';

export class AddCategoryForm extends FormGroup<IAddCategory> {
  constructor() {
    super({
      name: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }
}
