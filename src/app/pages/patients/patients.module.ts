import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { PatientsRoutingModule } from './patients-routing.module';

import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
	declarations: [PatientsComponent],
	imports: [
		CommonModule,
		PatientsRoutingModule,

		MatExpansionModule
	]
})
export class PatientsModule { }
