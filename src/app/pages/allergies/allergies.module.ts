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
import {MatDatepickerModule} from '@angular/material/datepicker';

import {StoreModule} from '@ngrx/store';
import { reducer } from 'src/app/store/allergy/allergy.reducer';
import { ConfirmDialogModule } from 'src/app/shared/components/confirm-dialog/confirm-dialog.module';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [AllergiesComponent, AllergyEditDialogComponent],
  entryComponents: [AllergyEditDialogComponent, ConfirmDialogComponent],
  imports: [
	CommonModule,
	AllergiesRoutingModule,
	FormsModule,

	StoreModule.forFeature('allergy', reducer),
	
	MatGridListModule,
	MatIconModule,
	MatButtonModule,
	MatDividerModule,
	MatTableModule,
	MatPaginatorModule,
	MatFormFieldModule,
	MatInputModule,
	MatDialogModule,
	MatSelectModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatSnackBarModule,
	
	ConfirmDialogModule
  ]
})
export class AllergiesModule { }
