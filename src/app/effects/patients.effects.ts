import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import { loadPatients, loadPatientsSuccess } from '../store/patients/patient.actions';
import { PatientsService } from '../services/patients.service';
import { PatientsMock } from '../pages/patients/patients.mock';
import { Patient } from '../store/patients/patient.model';

@Injectable()
export class PatientsEffects {

	useMocks: boolean = true;

	constructor(
		private actions$: Actions,
		private patientsService: PatientsService
	) {}	

	loadPatients$ = createEffect(
		() => this.actions$.pipe(
			ofType(loadPatients),
			map(_ => {
				if (this.useMocks) {
					const {patients} = PatientsMock;
					return loadPatientsSuccess({patients});
				} else {
					this.patientsService.loadPatients().subscribe((patients: Patient[]) => {
						loadPatientsSuccess({patients});
					});
				}
			})
		)
	);	
}
