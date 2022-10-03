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
  toArray,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMenuItemDto } from '../models/dto/menu-item.dto.interface';
import { ICategory } from '../models/interfaces/category.interface';
import { IImage } from '../models/interfaces/image.interface';
import { IIngredient } from '../models/interfaces/ingredient.interface';
import { IMenuItem } from '../models/interfaces/menu-item.interface';
import { CategoryService } from './category.service';
import { ImageService } from './image.service';
import { IngredientService } from './ingredient.service';

@Injectable({
  providedIn: 'root',
})
export class MenuItemService {
  constructor(
    private http: HttpClient,
    private imageService: ImageService,
    private categoryService: CategoryService,
    private ingredientService: IngredientService
  ) {}
  addMenuItem$(menuItem: IMenuItemDto) {
    console.log(menuItem);
    return this.http.post(environment.api + '/menuitemss', menuItem);
  }
  menuItemsDetails$(
    menuItemDto$: Observable<IMenuItemDto>
  ): Observable<IMenuItem> {
    return menuItemDto$.pipe(
      switchMap((menuItemDto: IMenuItemDto) => {
        if (menuItemDto.image) {
          return forkJoin({
            category: this.categoryService.getCategory$(menuItemDto.category),
            image: this.imageService.getImage$(menuItemDto.image),
            ingredients: from(menuItemDto.ingredients).pipe(
              mergeMap((ingredientId: number) => {
                return this.ingredientService.getIngredient$(ingredientId);
              }),
              toArray()
            ),
            item: of(menuItemDto),
          });
        } else {
          return forkJoin({
            category: this.categoryService.getCategory$(menuItemDto.category),

            ingredients: from(menuItemDto.ingredients).pipe(
              mergeMap((ingredientId: number) => {
                return this.ingredientService.getIngredient$(ingredientId);
              }),
              toArray()
            ),
            item: of(menuItemDto),
          });
        }
      }),
      map(
        (fj: {
          category: ICategory;
          image?: IImage;
          ingredients: IIngredient[];
          item: IMenuItemDto;
        }) => {
          return <IMenuItem>{
            id: fj.item.id,
            category: fj.category,
            image: fj.image ? fj.image : null,
            ingredients: fj.ingredients,
            name: fj.item.name,
            price: fj.item.price,
            description: fj.item.description,
          };
        }
      )
    );
  }

  getMenuItems$(): Observable<IMenuItem[]> {
    return this.http.get<IMenuItemDto[]>(environment.api + '/menuitems').pipe(
      switchMap((menuItemsDto: IMenuItemDto[]) => {
        return from(menuItemsDto);
      }),
      mergeMap((menuItemDto: IMenuItemDto) => {
        return this.menuItemsDetails$(of(menuItemDto));
      }),
      toArray()
    );
  }
}
