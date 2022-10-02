import { IImage } from './image.interface';

export interface IIngredient {
  id?: number;
  name: string;
  image: IImage | null;
}
