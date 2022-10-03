export interface IMenuItemDto {
  id?: number;
  name: string;
  category: number;
  image: number | null;
  ingredients: number[];
  price: number;
  description: string;
}
