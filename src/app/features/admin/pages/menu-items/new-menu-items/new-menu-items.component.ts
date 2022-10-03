import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IMenuItemDto } from 'src/app/models/dto/menu-item.dto.interface';
import { ICategory } from 'src/app/models/interfaces/category.interface';
import { IMenuItem } from 'src/app/models/interfaces/menu-item.interface';
import { CategoryService } from 'src/app/services/category.service';
import { MenuItemService } from 'src/app/services/menu-item.service';
import { IAddMenuItem } from '../../../util/form-interfaces/addMenuItem.interface';
import { AddMenuItemForm } from '../../../util/form-models/AddMenuItemForm';

@Component({
  selector: 'app-new-menu-items',
  templateUrl: './new-menu-items.component.html',
  styleUrls: ['./new-menu-items.component.scss'],
})
export class NewMenuItemsComponent implements OnInit {
  menuItemForm: FormGroup<IAddMenuItem> = new AddMenuItemForm();

  constructor(
    private menuItemService: MenuItemService,
    private router: Router
  ) {
    console.log(this.menuItemForm);
  }
  get category(): FormControl {
    return this.menuItemForm.get('category') as FormControl;
  }
  get ingredients(): FormArray {
    return this.menuItemForm.get('ingredients') as FormArray;
  }
  get price(): FormControl {
    return this.menuItemForm.get('price') as FormControl;
  }
  get name(): FormControl {
    return this.menuItemForm.get('name') as FormControl;
  }
  get image(): FormControl {
    return this.menuItemForm.get('image') as FormControl;
  }
  get description(): FormControl {
    return this.menuItemForm.get('description') as FormControl;
  }
  handleSubmit() {
    if (this.menuItemForm.valid) {
      console.log(this.menuItemForm.value);
      let menuItem: IMenuItemDto = {
        price: this.price.value,
        name: this.name.value,
        ingredients: this.ingredients.getRawValue(),
        image: this.image.value,
        category: parseInt(this.category.value),
        description: this.description.value,
      };
      console.log(menuItem);
      this.menuItemService.addMenuItem$(menuItem).subscribe(() => {
        this.router.navigate(['/menuitems']);
      });
    } else {
      this.menuItemForm.markAllAsTouched();
    }
  }
  ngOnInit(): void {}
}
