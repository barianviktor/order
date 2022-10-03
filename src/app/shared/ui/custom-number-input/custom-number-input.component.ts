import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-number-input',
  templateUrl: './custom-number-input.component.html',
  styleUrls: ['./custom-number-input.component.scss'],
})
export class CustomNumberInputComponent implements OnInit {
  @Input() placeholder!: string;
  @Input() control!: FormControl;
  constructor() {}

  ngOnInit(): void {}
}
