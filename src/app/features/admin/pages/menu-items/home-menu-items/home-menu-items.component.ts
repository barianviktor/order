import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenuItem } from 'src/app/models/interfaces/menu-item.interface';
import { MenuItemService } from 'src/app/services/menu-item.service';

@Component({
  selector: 'app-home-menu-items',
  templateUrl: './home-menu-items.component.html',
  styleUrls: ['./home-menu-items.component.scss'],
})
export class HomeMenuItemsComponent implements OnInit {
  menuItems$: Observable<IMenuItem[]>;
  constructor(private menuItemService: MenuItemService) {
    this.menuItems$ = menuItemService.getMenuItems$();
  }

  ngOnInit(): void {}
}
