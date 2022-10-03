import { ICategory } from './category.interface';
import { IImage } from './image.interface';
import { IIngredient } from './ingredient.interface';

export interface IMenuItem {
  id?: number;
  name: string;
  category: ICategory;
  image: IImage | null;
  ingredients: IIngredient[];
  price: number;
  description: string;
}
