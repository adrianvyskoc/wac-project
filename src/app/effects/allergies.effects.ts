import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import {AllergiesService} from '../services/allergies.service';
import { AllergiesMock } from '../pages/allergies/allergies.mock';
import { loadAllergies, loadAllergiesSuccess } from '../store/allergy/allergy.actions';
import { Allergy } from '../store/allergy/allergy.model';

@Injectable()
export class AllergiesEffects {

	useMocks: boolean = true;

	constructor(
		private actions$: Actions,
		private allergiesService: AllergiesService
	) {}	

	loadAllergies$ = createEffect(
		() => this.actions$.pipe(
			ofType(loadAllergies),
			map(actionData => {
				if (this.useMocks) {
					const allergies = AllergiesMock.allergies.filter((allergy: Allergy) => allergy.patient_id === actionData.patientId);
					return loadAllergiesSuccess({allergies});
				} else {
					this.allergiesService.loadAllergies(actionData.patientId).subscribe((allergies: Allergy[]) => {
						loadAllergiesSuccess({allergies});
					});
				}
			})
		)
	);	
}
