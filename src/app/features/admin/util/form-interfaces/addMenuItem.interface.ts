import { FormArray, FormControl } from '@angular/forms';

export interface IAddMenuItem {
  category: FormControl<number | null>;
  image: FormControl<string>;
  ingredients: FormArray<FormControl<number>>;
  name: FormControl<string>;
  price: FormControl<number | null>;
  description: FormControl<string>;
}
