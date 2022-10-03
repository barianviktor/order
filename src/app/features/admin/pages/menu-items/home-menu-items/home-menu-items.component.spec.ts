import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMenuItemsComponent } from './home-menu-items.component';

describe('HomeMenuItemsComponent', () => {
  let component: HomeMenuItemsComponent;
  let fixture: ComponentFixture<HomeMenuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMenuItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
