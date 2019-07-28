import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterContainerComponent } from './components';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { MovieSelectionComponent } from './components/movie-selection/movie-selection.component';
import { EnterRoutingModule } from './enter-routing.module';

@NgModule({
  declarations: [RegisterContainerComponent, FormRegisterComponent, MovieSelectionComponent],
  imports: [CommonModule, EnterRoutingModule, ReactiveFormsModule]
})
export class EnterModule {}
