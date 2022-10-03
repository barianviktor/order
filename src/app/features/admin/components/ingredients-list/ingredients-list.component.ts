import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IIngredient } from 'src/app/models/interfaces/ingredient.interface';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss'],
})
export class IngredientsListComponent implements OnInit {
  @Input() array!: FormArray<FormControl<number>>;
  ingredients$: Observable<IIngredient[]>;
  constructor(private ingredientsServcie: IngredientService) {
    this.ingredients$ = ingredientsServcie.getIngredients$();
    this.ingredientsServcie.getIngredients$().subscribe((x) => {
      console.log(x);
    });
  }
  handleIngredient(id: number) {
    console.log(id);
    console.log(this.array);

    if (this.array.getRawValue().includes(id)) {
      let i = 0;
      while (
        i < this.array.getRawValue().length &&
        this.array.getRawValue()[i] !== id
      ) {
        i++;
      }
      this.array.controls.splice(i, 1);
    } else {
      console.log('keves');

      let control = new FormControl<number>(id, { nonNullable: true });
      this.array.push(control);
    }
    console.log(this.array.getRawValue());
  }
  ngOnInit(): void {}
}
