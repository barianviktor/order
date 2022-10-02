import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-text-input',
  templateUrl: './custom-text-input.component.html',
  styleUrls: ['./custom-text-input.component.scss'],
})
export class CustomTextInputComponent implements OnInit {
  @Input() placeholder!: string;
  @Input() control!: FormControl;
  constructor() {}

  ngOnInit(): void {}
}
