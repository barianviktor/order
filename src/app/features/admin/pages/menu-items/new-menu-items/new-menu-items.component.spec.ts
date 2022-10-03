import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMenuItemsComponent } from './new-menu-items.component';

describe('NewMenuItemsComponent', () => {
  let component: NewMenuItemsComponent;
  let fixture: ComponentFixture<NewMenuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMenuItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
