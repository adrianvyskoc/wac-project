import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType, ROOT_EFFECTS_INIT} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import {AllergiesService} from '../services/allergies.service';
import { AllergiesMock } from '../pages/allergies/allergies.mock';
import { loadAllergies, loadAllergiesSuccess } from '../store/allergy/allergy.actions';

@Injectable()
export class AllergiesEffects {
	constructor(
		private actions$: Actions,
		private allergiesService: AllergiesService
	) {}	

	loadAllergies$ = createEffect(
		() => this.actions$.pipe(
			ofType(loadAllergies),
			map(_ => {
				const {allergies} = AllergiesMock;
				return loadAllergiesSuccess({allergies});
			})
		)
	);	
}
