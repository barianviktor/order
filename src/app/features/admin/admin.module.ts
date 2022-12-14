import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NewCategoriesComponent } from './pages/categories/new-categories/new-categories.component';
import { NewIngredientComponent } from './pages/ingredients/new-ingredient/new-ingredient.component';
import { HomeIngredientComponent } from './pages/ingredients/home-ingredient/home-ingredient.component';
import { HomeCategoriesComponent } from './pages/categories/home-categories/home-categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeMenuItemsComponent } from './pages/menu-items/home-menu-items/home-menu-items.component';
import { NewMenuItemsComponent } from './pages/menu-items/new-menu-items/new-menu-items.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';

@NgModule({
  declarations: [
    AdminComponent,
    HomeCategoriesComponent,
    NewCategoriesComponent,
    NewIngredientComponent,
    HomeIngredientComponent,
    HomeMenuItemsComponent,
    NewMenuItemsComponent,
    CategoriesListComponent,
    IngredientsListComponent,
  ],
  imports: [SharedModule, AdminRoutingModule],
})
export class AdminModule {}
