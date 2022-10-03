import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  forkJoin,
  from,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
  tap,
  toArray,
} from 'rxjs';
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
  getDataOfIngredient(
    ingredientStream: Observable<IIngredientDto>
  ): Observable<IIngredient> {
    return ingredientStream.pipe(
      switchMap((ingredientDto: IIngredientDto) => {
        if (ingredientDto.image) {
          return forkJoin({
            ingredient: of(ingredientDto),
            image: this.imageService.getImage$(ingredientDto.image),
          });
        } else {
          return forkJoin({
            ingredient: of(ingredientDto),
          });
        }
      }),
      map((fj: { ingredient: IIngredientDto; image?: IImage }) => {
        return <IIngredient>{
          id: fj.ingredient.id,
          name: fj.ingredient.name,
          image: fj.image ? fj.image : null,
        };
      })
    );
  }
  getIngredients$(): Observable<IIngredient[]> {
    return this.http
      .get<IIngredientDto[]>(environment.api + '/ingredients')
      .pipe(
        switchMap((ingredients: IIngredientDto[]) => {
          return from(ingredients);
        }),
        mergeMap((ingredient: IIngredientDto) => {
          return this.getDataOfIngredient(of(ingredient));
        }),
        toArray()
      );
  }
  getIngredient$(id: number): Observable<IIngredient> {
    return this.http
      .get<IIngredientDto>(environment.api + '/ingredients/' + id)
      .pipe(
        switchMap((dto: IIngredientDto) => {
          return this.getDataOfIngredient(of(dto));
        })
      );
  }
}
