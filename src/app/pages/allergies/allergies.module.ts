import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllergiesComponent } from './allergies.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {AllergiesRoutingModule} from './allergies-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AllergyEditDialogComponent } from './components/allergy-edit-dialog/allergy-edit-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [AllergiesComponent, AllergyEditDialogComponent],
  entryComponents: [AllergyEditDialogComponent],
  imports: [
	CommonModule,
	AllergiesRoutingModule,
	FormsModule,
	
	MatGridListModule,
	MatIconModule,
	MatButtonModule,
	MatDividerModule,
	MatTableModule,
	MatPaginatorModule,
	MatFormFieldModule,
	MatInputModule,
	MatDialogModule,
	MatSelectModule
  ]
})
export class AllergiesModule { }
