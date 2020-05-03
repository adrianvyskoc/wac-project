import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Allergy, AllergyType } from 'src/app/models/allergy.model';
import { AllergyEditDialogComponent } from './components/allergy-edit-dialog/allergy-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-allergies',
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.scss']
})
export class AllergiesComponent implements OnInit {
	displayedColumns: string[] = ['id', 'source', 'type', 'actions'];
  	dataSource: MatTableDataSource<Allergy>;

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	@ViewChild(MatSort, {static: true}) sort: MatSort;
	  
	filterInputValue: string = '';

  	constructor(public dialog: MatDialog) { }

	ngOnInit() {
		this.dataSource = new MatTableDataSource([
			{
				id: 12,
				source: 'Pel',
				type: AllergyType.ENVIROMENT
			}
		]);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	onEditAllergy(allergy: Allergy): void {
		const dialogRef = this.dialog.open(AllergyEditDialogComponent, {
		  	width: '50%',
		  	data: allergy
		});
	
		dialogRef.afterClosed().subscribe(result => {
			// hey
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
