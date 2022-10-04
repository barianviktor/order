import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { ILocation } from 'src/app/models/interfaces/location.interface';
import { ITable } from 'src/app/models/interfaces/table.interface';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-location-with-tables',
  templateUrl: './location-with-tables.component.html',
  styleUrls: ['./location-with-tables.component.scss'],
})
export class LocationWithTablesComponent implements OnInit, OnDestroy {
  @Input() location!: ILocation;
  tables$?: Observable<ITable[]>;
  updateTables$: Subject<void> = new Subject<void>();
  updateSub: Subscription;

  constructor(private tableService: TableService) {
    this.updateSub = this.updateTables$.subscribe(() => {
      this.tables$ = this.tableService.locationsTables$(this.location.id!);
    });
  }
  ngOnDestroy(): void {
    this.updateSub.unsubscribe();
  }

  ngOnInit(): void {
    this.updateTables$.next();
  }
  deleteTable(id: number) {
    this.tableService.deleteTable$(id).subscribe((x) => {
      this.updateTables$.next();
    });
  }
  addTable(e: any) {
    let rect = e.target.getBoundingClientRect();
    let xPercent = Math.round((100 / rect.width) * (e.clientX - rect.left));
    let yPercent = Math.round((100 / rect.height) * (e.clientY - rect.top));
    console.log(xPercent, yPercent);
  }
}
