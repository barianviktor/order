import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITable } from 'src/app/models/interfaces/table.interface';

@Component({
  selector: 'app-table-dot',
  templateUrl: './table-dot.component.html',
  styleUrls: ['./table-dot.component.scss'],
})
export class TableDotComponent implements OnInit {
  @Input() table!: ITable;
  @Input() selected: boolean = false;
  @Output() selectTable: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {
    console.log(this.table);
  }

  handleSelect(id: number) {
    this.selectTable.emit(id);
  }
}
