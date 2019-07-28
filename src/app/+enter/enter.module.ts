import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EnterRoutingModule } from './enter-routing.module';
import { RegisterContainerComponent } from './components';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { MovieSelectionComponent } from './components/movie-selection/movie-selection.component';

@NgModule({
  declarations: [RegisterContainerComponent, FormRegisterComponent, MovieSelectionComponent],
  imports: [
    CommonModule,
    EnterRoutingModule,
    ReactiveFormsModule
  ]
})
export class EnterModule { }
