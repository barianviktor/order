import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOrderComponent } from './pages/orders/new-order/new-order.component';
import { DetailsLocationComponent } from './pages/tables/details-location/details-location.component';
import { HomeLocationsComponent } from './pages/tables/home-locations/home-locations.component';
import { NewLocationComponent } from './pages/tables/new-location/new-location.component';
import { WaiterComponent } from './waiter.component';

const routes: Routes = [
  {
    path: '',
    component: WaiterComponent,
    children: [
      {
        path: 'locations',
        component: HomeLocationsComponent,
      },
      {
        path: 'locations/new',
        component: NewLocationComponent,
      },
      {
        path: 'locations/:id',
        component: DetailsLocationComponent,
      },

      {
        path: 'orders/new',
        component: NewOrderComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaiterRoutingModule {}
