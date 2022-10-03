import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/models/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  categories$: Observable<ICategory[]>;
  @Input() control!: FormControl;
  constructor(private categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories$();
  }

  ngOnInit(): void {}
  handleCategoryChange(e: Event) {
    console.log(e);

    this.control.setValue((e.target as HTMLInputElement).value);
    this.control.markAsTouched();
    console.log(this.control);
  }
}
