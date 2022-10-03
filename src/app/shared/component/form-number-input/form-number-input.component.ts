import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-number-input',
  templateUrl: './form-number-input.component.html',
  styleUrls: ['./form-number-input.component.scss'],
})
export class FormNumberInputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() placeholder!: string;
  constructor() {}

  ngOnInit(): void {}
}
