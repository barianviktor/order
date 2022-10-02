import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IIngredient } from 'src/app/models/interfaces/ingredient.interface';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-home-ingredient',
  templateUrl: './home-ingredient.component.html',
  styleUrls: ['./home-ingredient.component.scss'],
})
export class HomeIngredientComponent implements OnInit {
  ingredients$: Observable<IIngredient[]>;
  constructor(private ingredientService: IngredientService) {
    this.ingredients$ = this.ingredientService.getIngredients$();
  }

  ngOnInit(): void {}
}
