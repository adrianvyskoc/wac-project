import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccinesComponent } from './vaccines.component';
import { VaccinesRoutingModule } from './vaccines-routing.module';

import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [VaccinesComponent],
  imports: [
	CommonModule,
	FormsModule,
	VaccinesRoutingModule,

	MatTabsModule,
	MatTableModule,
	MatIconModule,
	MatPaginatorModule,
	MatSortModule
  ]
})
export class VaccinesModule { }
