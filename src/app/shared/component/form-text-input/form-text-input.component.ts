import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-text-input',
  templateUrl: './form-text-input.component.html',
  styleUrls: ['./form-text-input.component.scss'],
})
export class FormTextInputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() placeholder!: string;
  constructor() {}

  ngOnInit(): void {}
}
