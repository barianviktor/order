import { FormControl } from '@angular/forms';

export interface IAddIngredient {
  name: FormControl<string>;
  image: FormControl<string | null>;
}
