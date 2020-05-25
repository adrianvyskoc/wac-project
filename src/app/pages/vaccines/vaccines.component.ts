import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Vaccine } from 'src/app/store/vaccine/vaccine.model';
import { Store } from '@ngrx/store';
import { AmbulanceState, selectVaccinesList } from 'src/app/store/AmbulanceState';
import { loadVaccines } from 'src/app/store/vaccine/vaccine.actions';


@Component({
	selector: 'app-vaccines',
	templateUrl: './vaccines.component.html',
	styleUrls: ['./vaccines.component.scss']
})
export class VaccinesComponent implements OnInit {  
	vaccines: {
		completed: Vaccine[],
		upcoming: Vaccine[]
	};

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	@ViewChild(MatSort, {static: true}) sort: MatSort;

  	constructor(
		private store: Store<AmbulanceState>
	  ) { }

	ngOnInit() {
		this.store.dispatch(loadVaccines());
		this.store.select(selectVaccinesList).subscribe((vaccines: Vaccine[]) => {

			this.vaccines = vaccines.reduce((acc, vaccine) => {
				acc[vaccine.completed ? 'completed' : 'upcoming'].push(vaccine);
				return acc;
			}, { completed: [], upcoming: [] });
		});
	}

	

}
