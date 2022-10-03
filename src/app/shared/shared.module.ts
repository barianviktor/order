import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomTextInputComponent } from './ui/custom-text-input/custom-text-input.component';
import { FormTextInputComponent } from './component/form-text-input/form-text-input.component';
import { FormSelectInputComponent } from './component/form-select-input/form-select-input.component';
import { FormNumberInputComponent } from './component/form-number-input/form-number-input.component';
import { CustomNumberInputComponent } from './ui/custom-number-input/custom-number-input.component';

@NgModule({
  declarations: [
    CustomTextInputComponent,
    FormTextInputComponent,
    FormSelectInputComponent,
    FormNumberInputComponent,
    CustomNumberInputComponent,
  ],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomTextInputComponent,
    FormTextInputComponent,
    FormSelectInputComponent,
    FormNumberInputComponent,
    CustomNumberInputComponent,
  ],
})
export class SharedModule {}
