import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAddIngredient } from '../form-interfaces/addIngredientForm.interface';

export class AddIngredientForm extends FormGroup<IAddIngredient> {
  constructor() {
    super({
      name: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      image: new FormControl('', {
        validators: [],
      }),
    });
  }
}
