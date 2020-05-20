import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Vaccine } from 'src/app/store/vaccine/vaccine.model';

@Component({
	selector: 'app-vaccines',
	templateUrl: './vaccines.component.html',
	styleUrls: ['./vaccines.component.scss']
})
export class VaccinesComponent implements OnInit {
	displayedColumns: string[] = ['id', 'completed', 'duration', 'vaccined_at', 'against', 'actions'];
  	dataSource: MatTableDataSource<Vaccine>;

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	@ViewChild(MatSort, {static: true}) sort: MatSort;

  	constructor() { }

	ngOnInit() {
		this.dataSource = new MatTableDataSource([
			{
				id: 1,
				completed: false,
				duration: 2,
				vaccined_at: new Date(),
				against: 'coronavirus'
			}
		]);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	onMarkAsCompleted(vaccine: Vaccine) {

	}

}
