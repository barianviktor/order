import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ILocation } from 'src/app/models/interfaces/location.interface';
import { ITable } from 'src/app/models/interfaces/table.interface';
import { LocationService } from 'src/app/services/location.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-details-location',
  templateUrl: './details-location.component.html',
  styleUrls: ['./details-location.component.scss'],
})
export class DetailsLocationComponent implements OnInit {
  location$?: Observable<ILocation>;
  constructor(
    private locationService: LocationService,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((param: Params) => {
      console.log(param);
      this.location$ = locationService.getLocation$(param['id']);
    });
  }

  ngOnInit(): void {}
}
