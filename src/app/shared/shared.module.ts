import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomTextInputComponent } from './ui/custom-text-input/custom-text-input.component';
import { FormTextInputComponent } from './component/form-text-input/form-text-input.component';

@NgModule({
  declarations: [CustomTextInputComponent, FormTextInputComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomTextInputComponent,
    FormTextInputComponent,
  ],
})
export class SharedModule {}
