import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Vaccine } from 'src/app/models/vaccine.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
	selector: 'app-vaccines',
	templateUrl: './vaccines.component.html',
	styleUrls: ['./vaccines.component.scss']
})
export class VaccinesComponent implements OnInit {
	displayedColumns: string[] = ['id', 'completed', 'duration', 'vaccined_at', 'against'];
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

}
