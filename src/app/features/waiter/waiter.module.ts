import { NgModule } from '@angular/core';
import { WaiterComponent } from './waiter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewOrderComponent } from './pages/orders/new-order/new-order.component';
import { WaiterRoutingModule } from './waiter-routing.module';

@NgModule({
  declarations: [WaiterComponent, NewOrderComponent],
  imports: [SharedModule, WaiterRoutingModule],
  exports: [WaiterComponent, NewOrderComponent],
})
export class WaiterModule {}
