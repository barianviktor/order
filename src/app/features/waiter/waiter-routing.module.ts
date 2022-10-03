import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOrderComponent } from './pages/orders/new-order/new-order.component';
import { WaiterComponent } from './waiter.component';

const routes: Routes = [
  {
    path: '',
    component: WaiterComponent,
    children: [
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
