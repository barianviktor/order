import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICategory } from '../models/interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  addCategory$(category: ICategory) {
    return this.http.post<ICategory>(environment.api + '/categories', category);
  }
  getCategories$() {
    return this.http.get<ICategory[]>(environment.api + '/categories');
  }
}
