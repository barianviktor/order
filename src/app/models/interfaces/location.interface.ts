import { IImage } from './image.interface';

export interface ILocation {
  id?: number;
  name: string;
  floor_plan: IImage;
}
