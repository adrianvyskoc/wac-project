import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Allergy } from 'src/app/store/allergy/allergy.model';
import { AllergyEditDialogComponent } from './components/allergy-edit-dialog/allergy-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Store, UPDATE } from '@ngrx/store';
import { AmbulanceState, selectAllergiesList } from 'src/app/store/AmbulanceState';
import { Observable } from 'rxjs';
import { deleteAllergy, loadAllergies, updateAllergy } from 'src/app/store/allergy/allergy.actions';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-allergies',
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.scss']
})
export class AllergiesComponent implements OnInit {

	allergies: Observable<Allergy[]>;

	displayedColumns: string[] = ['id', 'source', 'type', 'diagnosed_at', 'actions'];
  	dataSource: MatTableDataSource<Allergy>;

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	@ViewChild(MatSort, {static: true}) sort: MatSort;
	  
	filterInputValue: string = '';

  	constructor(
		private dialog: MatDialog,
		private store: Store<AmbulanceState>,
		private _snackBar: MatSnackBar
	) { }

	ngOnInit() {
		this.store.dispatch(loadAllergies());
		this.store.select(selectAllergiesList).subscribe((allergies: Allergy[]) => {
			this.dataSource = new MatTableDataSource(allergies);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}

	onEditAllergy(allergy: Allergy): void {
		const dialogRef = this.dialog.open(AllergyEditDialogComponent, {
		  	width: '50%',
		  	data: allergy
		});
	
		dialogRef.afterClosed().subscribe((updatedAllergy: Allergy) => {
			const updates: Update<Allergy> = {
				id: updatedAllergy.id,
				changes: {
					...updatedAllergy
				}
			}

			this.store.dispatch(updateAllergy({ allergy: updates }));
			this._snackBar.open('Allergy has been successfully edited.', '', {
				duration: 2000
			});
		});
	}

	onDeleteAllergy(allergy: Allergy): void {
		const dialogRef = this.dialog.open(ConfirmDialogComponent, {
			width: '25%',
			data: 'Are you sure that you want to delete this allergy?'
	  });

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.store.dispatch(deleteAllergy({ id: allergy.id }));
				this._snackBar.open('Allergy has been successfully deleted.', '', {
					duration: 2000
				});
			}
		});
	}

	applyFilter(event: Event): void {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	
		if (this.dataSource.paginator) {
		  	this.dataSource.paginator.firstPage();
		}
	}
}
