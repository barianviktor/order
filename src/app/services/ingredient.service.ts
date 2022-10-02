import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IIngredientDto } from '../models/dto/ingredient.dto.interface';
import { IImage } from '../models/interfaces/image.interface';
import { IIngredient } from '../models/interfaces/ingredient.interface';
import { ImageService } from './image.service';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  constructor(private http: HttpClient, private imageService: ImageService) {}

  addIngredient$(ingredient: IIngredient) {
    if (ingredient.image) {
      return this.imageService.addImage$(ingredient.image).pipe(
        switchMap((img: IImage) => {
          let ingredientDto: IIngredientDto = {
            ...ingredient,
            image: img.id!,
          };
          return this.http.post<IIngredientDto>(
            environment.api + '/ingredients',
            ingredientDto
          );
        })
      );
    } else {
      return this.http.post<IIngredientDto>(
        environment.api + '/ingredients',
        ingredient
      );
    }
  }

  getIngredients$() {
    return this.http.get<IIngredient[]>(environment.api + '/ingredients');
  }
}
