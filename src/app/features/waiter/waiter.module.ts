import { NgModule } from '@angular/core';
import { WaiterComponent } from './waiter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewOrderComponent } from './pages/orders/new-order/new-order.component';
import { WaiterRoutingModule } from './waiter-routing.module';
import { HomeLocationsComponent } from './pages/tables/home-locations/home-locations.component';
import { NewLocationComponent } from './pages/tables/new-location/new-location.component';
import { DetailsLocationComponent } from './pages/tables/details-location/details-location.component';
import { LocationWithTablesComponent } from './components/location-with-tables/location-with-tables.component';

@NgModule({
  declarations: [
    WaiterComponent,
    NewOrderComponent,
    HomeLocationsComponent,
    NewLocationComponent,
    DetailsLocationComponent,
    LocationWithTablesComponent,
  ],
  imports: [SharedModule, WaiterRoutingModule],
  exports: [WaiterComponent, NewOrderComponent],
})
export class WaiterModule {}
