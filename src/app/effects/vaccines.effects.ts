import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import { VaccinesService } from '../services/vaccines.service';
import { loadVaccines, loadVaccinesSuccess } from '../store/vaccine/vaccine.actions';
import { VaccinesMock } from '../pages/vaccines/vaccines.mock';
import { Vaccine } from '../store/vaccine/vaccine.model';

@Injectable()
export class VaccinesEffects {

	useMocks: boolean = true;

	constructor(
		private actions$: Actions,
		private vaccinesService: VaccinesService
	) {}	

	loadVaccines$ = createEffect(
		() => this.actions$.pipe(
			ofType(loadVaccines),
			map(actionData => {
				if (this.useMocks) {
					const vaccines = VaccinesMock.vaccines.filter((vaccine: Vaccine) => vaccine.patient_id === actionData.patientId);
					return loadVaccinesSuccess({vaccines});
				} else {
					this.vaccinesService.loadVaccines(actionData.patientId).subscribe((vaccines: Vaccine[]) => {
						loadVaccinesSuccess({vaccines});
					});
				}
			})
		)
	);	
}
