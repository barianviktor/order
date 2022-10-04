import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationWithTablesComponent } from './location-with-tables.component';

describe('LocationWithTablesComponent', () => {
  let component: LocationWithTablesComponent;
  let fixture: ComponentFixture<LocationWithTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationWithTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationWithTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
