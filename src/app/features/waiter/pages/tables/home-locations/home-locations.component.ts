import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocation } from 'src/app/models/interfaces/location.interface';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-home-locations',
  templateUrl: './home-locations.component.html',
  styleUrls: ['./home-locations.component.scss'],
})
export class HomeLocationsComponent implements OnInit {
  locations$: Observable<ILocation[]>;
  constructor(private locationService: LocationService) {
    this.locations$ = locationService.getLocations$();
  }

  ngOnInit(): void {}
}
