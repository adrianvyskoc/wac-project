import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { PatientsRoutingModule } from './patients-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [PatientsComponent],
  imports: [
	CommonModule,
	PatientsRoutingModule,
	MatDividerModule,
	MatButtonModule
  ]
})
export class PatientsModule { }
