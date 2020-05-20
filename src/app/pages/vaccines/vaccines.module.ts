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
import { MatButtonModule } from '@angular/material/button';


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
	MatSortModule,
	MatButtonModule
  ]
})
export class VaccinesModule { }
