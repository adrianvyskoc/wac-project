import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AmbulanceState, selectPatientsList } from 'src/app/store/AmbulanceState';
import { loadPatients } from 'src/app/store/patients/patient.actions';
import { Patient } from 'src/app/store/patients/patient.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

	patients: Observable<Patient[]>;

	constructor(
		private store: Store<AmbulanceState>,
	) { }

	ngOnInit() {
		this.store.dispatch(loadPatients());
		this.patients = this.store.select(selectPatientsList);
	}

}
