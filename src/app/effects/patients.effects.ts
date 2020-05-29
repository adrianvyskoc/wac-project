import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import { loadPatients, loadPatientsSuccess } from '../store/patients/patient.actions';
import { PatientsService } from '../services/patients.service';
import { PatientsMock } from '../pages/patients/patients.mock';

@Injectable()
export class PatientsEffects {
	constructor(
		private actions$: Actions,
		private patientsService: PatientsService
	) {}	

	loadPatients$ = createEffect(
		() => this.actions$.pipe(
			ofType(loadPatients),
			map(_ => {
				const {patients} = PatientsMock;
				return loadPatientsSuccess({patients});
			})
		)
	);	
}
