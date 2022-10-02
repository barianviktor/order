import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';
import { IAddCategory } from '../../../util/form-interfaces/addCategoryForm.interface';
import { AddCategoryForm } from '../../../util/form-models/AddCategoryForm';

@Component({
  selector: 'app-new-categories',
  templateUrl: './new-categories.component.html',
  styleUrls: ['./new-categories.component.scss'],
})
export class NewCategoriesComponent implements OnInit {
  categoryForm: FormGroup<IAddCategory>;
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.categoryForm = new AddCategoryForm();
    console.log(this.categoryForm);
  }
  get name(): FormControl {
    return this.categoryForm.get('name') as FormControl;
  }
  addCategory() {
    if (this.categoryForm.valid) {
      let category: ICategory = {
        name: this.categoryForm.value.name!,
      };
      this.categoryService.addCategory$(category).subscribe((x) => {
        this.router.navigate(['/categories']);
      });
    } else {
      this.categoryForm.markAllAsTouched();
    }
  }
  ngOnInit(): void {}
}
