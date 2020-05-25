import { Component, Input, OnChanges } from '@angular/core';
import { Vaccine } from 'src/app/store/vaccine/vaccine.model';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { AmbulanceState } from 'src/app/store/AmbulanceState';
import { updateVaccine } from 'src/app/store/vaccine/vaccine.actions';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-vaccines-upcoming',
  templateUrl: './vaccines-upcoming.component.html',
  styleUrls: ['./vaccines-upcoming.component.scss']
})
export class VaccinesUpcomingComponent implements OnChanges {
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

	onMarkAsCompleted(vaccine: Vaccine) {
		const updates: Update<Vaccine> = {
			id: vaccine.id,
			changes: {
				completed: true
			}
		}

		this.store.dispatch(updateVaccine({ vaccine: updates }))
	}

}
