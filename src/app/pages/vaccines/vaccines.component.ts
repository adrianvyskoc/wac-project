import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Vaccine } from 'src/app/store/vaccine/vaccine.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AmbulanceState } from 'src/app/store/AmbulanceState';
import * as fromVaccine from '../../store/vaccine/vaccine.reducer';

@Component({
	selector: 'app-vaccines',
	templateUrl: './vaccines.component.html',
	styleUrls: ['./vaccines.component.scss']
})
export class VaccinesComponent implements OnInit {
	displayedColumns: string[] = ['id', 'completed', 'duration', 'vaccined_at', 'against', 'actions'];
	dataSource: MatTableDataSource<Vaccine>;
	  
	vaccines: Observable<Vaccine[]>;

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	@ViewChild(MatSort, {static: true}) sort: MatSort;

  	constructor(
		private store: Store<AmbulanceState>
	  ) { }

	ngOnInit() {
		//this.vaccines = this.store.pipe(select(selectVaccinesList), select(fromVaccine.adapter.getSelectors().selectAll));
		this.vaccines.subscribe((vaccines: Vaccine[]) => {
			this.dataSource = new MatTableDataSource(vaccines);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}

	onMarkAsCompleted(vaccine: Vaccine) {

	}

}
