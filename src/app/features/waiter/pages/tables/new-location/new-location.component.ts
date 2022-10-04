import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';
import { IAddLocationForm } from '../../../util/form-interfaces/addLocationForm.interface';
import { AddLocationForm } from '../../../util/form-models/AddLocationForm';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.scss'],
})
export class NewLocationComponent implements OnInit {
  addFormLocation: FormGroup<IAddLocationForm> = new AddLocationForm();
  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}
  get name(): FormControl {
    return this.addFormLocation.get('name') as FormControl;
  }
  get floor_plan(): FormControl {
    return this.addFormLocation.get('floor_plan') as FormControl;
  }
  ngOnInit(): void {}
  handleSubmit() {
    if (this.addFormLocation.valid) {
      this.locationService
        .addLocation$(this.name.value, this.floor_plan.value)
        .subscribe(() => {
          this.router.navigate(['/locations']);
        });
    } else {
      this.addFormLocation.markAllAsTouched();
    }
  }
}
