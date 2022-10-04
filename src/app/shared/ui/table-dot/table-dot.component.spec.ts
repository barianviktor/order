import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDotComponent } from './table-dot.component';

describe('TableDotComponent', () => {
  let component: TableDotComponent;
  let fixture: ComponentFixture<TableDotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
