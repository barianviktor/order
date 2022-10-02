import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IImage } from 'src/app/models/interfaces/image.interface';
import { IIngredient } from 'src/app/models/interfaces/ingredient.interface';
import { IngredientService } from 'src/app/services/ingredient.service';
import { IAddIngredient } from '../../../util/form-interfaces/addIngredientForm.interface';
import { AddIngredientForm } from '../../../util/form-models/AddIngredientForm';

@Component({
  selector: 'app-new-ingredient',
  templateUrl: './new-ingredient.component.html',
  styleUrls: ['./new-ingredient.component.scss'],
})
export class NewIngredientComponent implements OnInit {
  ingredientForm: FormGroup<IAddIngredient>;
  constructor(
    private ingredientService: IngredientService,
    private router: Router
  ) {
    this.ingredientForm = new AddIngredientForm();
  }
  get name(): FormControl {
    return this.ingredientForm.get('name') as FormControl;
  }
  get image(): FormControl {
    return this.ingredientForm.get('image') as FormControl;
  }
  addIngredient() {
    if (this.ingredientForm.valid) {
      let ingredient: IIngredient = {
        name: this.ingredientForm.value.name!,
        image: this.ingredientForm.value.image
          ? <IImage>{
              path: this.ingredientForm.value.image,
              created_at: new Date().toISOString().split('T')[0],
            }
          : null,
      };
      this.ingredientService.addIngredient$(ingredient).subscribe((x) => {
        this.router.navigate(['/ingredients']);
      });
    } else {
      this.ingredientForm.markAllAsTouched();
    }
  }
  ngOnInit(): void {}
}
