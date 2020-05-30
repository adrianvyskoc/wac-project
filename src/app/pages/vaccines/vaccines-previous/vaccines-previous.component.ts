import { Component, Input, OnChanges } from '@angular/core';
import { Vaccine } from 'src/app/store/vaccine/vaccine.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AmbulanceState } from 'src/app/store/AmbulanceState';
import { Store } from '@ngrx/store';
import { addVaccine, upsertVaccine } from 'src/app/store/vaccine/vaccine.actions';

@Component({
	selector: 'app-vaccines-previous',
	templateUrl: './vaccines-previous.component.html',
	styleUrls: ['./vaccines-previous.component.scss']
})
export class VaccinesPreviousComponent implements OnChanges {
	displayedColumns: string[] = ['id', 'duration', 'vaccined_at', 'against', 'actions'];
	dataSource: MatTableDataSource<Vaccine>;
	paginator: MatPaginator;
	sort: MatSort;

	@Input() vaccines: Vaccine[] = [];

	constructor(
		private store: Store<AmbulanceState>
	) { }

	ngOnChanges() {
		this.dataSource = new MatTableDataSource(this.vaccines);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	makeSameVaccineAsUpcoming(vaccine: Vaccine) {
		this.store.dispatch(addVaccine({ vaccine: {
			...vaccine,
			id: '',
			completed: false
		} }));
	}
}
