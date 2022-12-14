import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeCategoriesComponent } from './pages/categories/home-categories/home-categories.component';
import { NewCategoriesComponent } from './pages/categories/new-categories/new-categories.component';
import { HomeIngredientComponent } from './pages/ingredients/home-ingredient/home-ingredient.component';
import { NewIngredientComponent } from './pages/ingredients/new-ingredient/new-ingredient.component';
import { HomeMenuItemsComponent } from './pages/menu-items/home-menu-items/home-menu-items.component';
import { NewMenuItemsComponent } from './pages/menu-items/new-menu-items/new-menu-items.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'categories',
        component: HomeCategoriesComponent,
      },
      {
        path: 'categories/new',
        component: NewCategoriesComponent,
      },
      {
        path: 'ingredients',
        component: HomeIngredientComponent,
      },
      {
        path: 'ingredients/new',
        component: NewIngredientComponent,
      },
      {
        path: 'menuitems',
        component: HomeMenuItemsComponent,
      },
      {
        path: 'menuitems/new',
        component: NewMenuItemsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
