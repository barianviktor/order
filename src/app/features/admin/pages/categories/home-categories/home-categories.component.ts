import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/models/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.scss'],
})
export class HomeCategoriesComponent implements OnInit {
  categories$: Observable<ICategory[]>;
  constructor(private categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories$();
  }

  ngOnInit(): void {}
}
